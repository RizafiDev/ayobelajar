import React, { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string; // Warna garis spark
  sparkSize?: number; // Panjang garis spark awal
  sparkRadius?: number; // Jarak maksimal spark menjauh dari titik klik
  sparkCount?: number; // Jumlah garis spark yang muncul setiap klik
  duration?: number; // Durasi animasi spark dalam milidetik
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out"; // Fungsi easing untuk animasi
  extraScale?: number; // Skala tambahan untuk jarak spark
  children?: React.ReactNode; // Elemen anak yang akan dibungkus oleh komponen ini
}

interface Spark {
  x: number; // Posisi x awal spark (titik klik)
  y: number; // Posisi y awal spark (titik klik)
  angle: number; // Arah gerak spark dalam radian
  startTime: number; // Timestamp awal animasi spark
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children,
}) => {
  // Ref ke elemen canvas untuk menggambar sparks
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Menyimpan daftar sparks yang sedang dianimasikan
  const sparksRef = useRef<Spark[]>([]);

  // Menyimpan waktu mulai animasi global untuk sinkronisasi
  const startTimeRef = useRef<number | null>(null);

  // Setup canvas agar ukurannya sesuai container induk secara dinamis
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      // Ubah ukuran canvas hanya jika berbeda agar tidak memicu redraw berlebihan
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      // Debounce resize agar tidak terlalu sering resize saat resize window
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    // Gunakan ResizeObserver untuk memantau perubahan ukuran elemen induk
    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    // Set ukuran canvas saat mount awal
    resizeCanvas();

    // Cleanup saat unmount
    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Fungsi easing untuk animasi berdasarkan properti easing
  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          // ease-out default (t * (2 - t))
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Efek utama untuk melakukan animasi sparks menggunakan requestAnimationFrame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const draw = (timestamp: number) => {
      // Simpan waktu mulai animasi pada frame pertama
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      // Bersihkan canvas sebelum menggambar frame baru
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter sparks yang masih aktif (belum lewat durasi)
      sparksRef.current = sparksRef.current.filter((spark: Spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          // Jika durasi spark habis, hapus dari daftar sparks
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        // Hitung jarak spark menjauh dari titik klik dengan easing dan scaling
        const distance = eased * sparkRadius * extraScale;

        // Panjang garis spark berkurang seiring animasi
        const lineLength = sparkSize * (1 - eased);

        // Koordinat awal dan akhir garis spark berdasarkan sudut dan jarak
        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        // Gambar garis spark dengan warna dan ketebalan yang ditentukan
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true; // Pertahankan spark ini di array untuk frame berikutnya
      });

      // Minta frame animasi berikutnya
      animationId = requestAnimationFrame(draw);
    };

    // Mulai animasi
    animationId = requestAnimationFrame(draw);

    // Cleanup animasi saat unmount atau props berubah
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    easeFunc,
    extraScale,
  ]);

  // Handler klik pada div pembungkus untuk menambahkan sparks baru
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Hitung posisi klik relatif terhadap canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();

    // Buat sparks baru dengan sudut yang tersebar merata (360 derajat dibagi sparkCount)
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));

    // Tambahkan sparks baru ke array sparks yang dianimasikan
    sparksRef.current.push(...newSparks);
  };

  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      {/* Canvas untuk menggambar sparks dengan posisi absolute dan pointer-events none supaya klik tidak terganggu */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      {/* Render elemen anak */}
      {children}
    </div>
  );
};

export default ClickSpark;
