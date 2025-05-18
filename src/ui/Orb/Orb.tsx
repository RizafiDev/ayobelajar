import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Vec3 } from "ogl";

interface OrbProps {
  hue?: number; // Warna hue (warna utama) orb, dalam derajat
  hoverIntensity?: number; // Intensitas efek saat hover
  rotateOnHover?: boolean; // Apakah orb berputar saat hover
  forceHoverState?: boolean; // Memaksa state hover selalu aktif (override)
}

export default function Orb({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false,
}: OrbProps) {
  // Ref untuk container DOM tempat WebGL canvas akan ditempel
  const ctnDom = useRef<HTMLDivElement>(null);

  // Vertex shader GLSL — mendefinisikan posisi vertex dan passing UV koordinat
  const vert = /* glsl */ `
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;  // meneruskan koordinat uv ke fragment shader
      gl_Position = vec4(position, 0.0, 1.0); // posisi vertex clip space
    }
  `;

  // Fragment shader GLSL — semua perhitungan warna dan efek animasi orb di sini
  const frag = /* glsl */ `
    precision highp float;

    uniform float iTime;            // waktu animasi dalam detik
    uniform vec3 iResolution;       // resolusi canvas (x,y) dan rasio
    uniform float hue;              // hue warna orb
    uniform float hover;            // nilai hover state (0..1)
    uniform float rot;              // rotasi orb (radian)
    uniform float hoverIntensity;   // intensitas efek hover
    varying vec2 vUv;               // koordinat UV dari vertex shader

    // Fungsi helper untuk konversi rgb <-> yiq (untuk manipulasi hue)
    vec3 rgb2yiq(vec3 c) { ... }
    vec3 yiq2rgb(vec3 c) { ... }
    vec3 adjustHue(vec3 color, float hueDeg) { ... }

    // Fungsi noise 3D (Simplex noise)
    vec3 hash33(vec3 p3) { ... }
    float snoise3(vec3 p) { ... }

    // Fungsi ekstrak alpha dari warna berdasarkan luminance
    vec4 extractAlpha(vec3 colorIn) { ... }

    // Warna dasar orb dan parameter radius serta skala noise
    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    // Fungsi pencahayaan dengan dua metode berbeda
    float light1(float intensity, float attenuation, float dist) { ... }
    float light2(float intensity, float attenuation, float dist) { ... }

    // Fungsi utama menggambar orb dengan noise dan cahaya
    vec4 draw(vec2 uv) {
      // Warna yang sudah di-adjust hue-nya
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);

      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;

      // Noise untuk efek dinamis pada radius
      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);

      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      col = clamp(col, 0.0, 1.0);

      return extractAlpha(col);
    }

    // Fungsi utama fragment shader, mengatur uv dengan rotasi dan efek hover
    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;

      // Rotasi uv sesuai uniform rotasi
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

      // Offset uv berdasarkan efek hover (bergelombang)
      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

      return draw(uv);
    }

    // Entry point fragment shader
    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a); // alpha premultiplied
    }
  `;

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    // Inisialisasi renderer WebGL dengan alpha dan premultipliedAlpha
    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0); // background transparan
    container.appendChild(gl.canvas); // attach canvas ke container

    // Membuat geometry segitiga penuh layar (fullscreen triangle)
    const geometry = new Triangle(gl);

    // Membuat program shader dengan vertex & fragment shader dan uniform
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Vec3(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        hue: { value: hue },
        hover: { value: 0 },
        rot: { value: 0 },
        hoverIntensity: { value: hoverIntensity },
      },
    });

    // Membuat mesh dengan geometry dan shader program
    const mesh = new Mesh(gl, { geometry, program });

    // Fungsi resize untuk menyesuaikan ukuran canvas sesuai container dan DPR device
    function resize() {
      if (!container) return;
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";
      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    }
    window.addEventListener("resize", resize);
    resize();

    // State internal untuk efek hover dan rotasi
    let targetHover = 0;
    let lastTime = 0;
    let currentRot = 0;
    const rotationSpeed = 0.3; // kecepatan rotasi rad/s

    // Handler mouse move untuk mendeteksi apakah mouse berada dalam area orb
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;
      const size = Math.min(width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      // Mengubah posisi mouse ke koordinat UV (-2..2)
      const uvX = ((x - centerX) / size) * 2.0;
      const uvY = ((y - centerY) / size) * 2.0;

      // Jika jarak dari center kurang dari 0.8, aktifkan hover
      if (Math.sqrt(uvX * uvX + uvY * uvY) < 0.8) {
        targetHover = 1;
      } else {
        targetHover = 0;
      }
    };

    // Handler mouse leave, matikan hover
    const handleMouseLeave = () => {
      targetHover = 0;
    };

    // Pasang event listener mouse
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let rafId: number;
    // Loop animasi render dengan requestAnimationFrame
    const update = (t: number) => {
      rafId = requestAnimationFrame(update);
      const dt = (t - lastTime) * 0.001; // delta waktu detik
      lastTime = t;
      program.uniforms.iTime.value = t * 0.001;
      program.uniforms.hue.value = hue;
      program.uniforms.hoverIntensity.value = hoverIntensity;

      // Hitung nilai hover yang smooth, interpolasi ke targetHover
      const effectiveHover = forceHoverState ? 1 : targetHover;
      program.uniforms.hover.value +=
        (effectiveHover - program.uniforms.hover.value) * 0.1;

      // Rotasi orb saat hover jika opsi aktif
      if (rotateOnHover && effectiveHover > 0.5) {
        currentRot += dt * rotationSpeed;
      }
      program.uniforms.rot.value = currentRot;

      // Render scene
      renderer.render({ scene: mesh });
    };
    rafId = requestAnimationFrame(update);

    // Cleanup saat komponen unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeChild(gl.canvas);
      // Membebaskan context WebGL secara eksplisit
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState]);

  // Render container div yang akan jadi tempat canvas WebGL
  return <div ref={ctnDom} className="w-full h-full" />;
}
