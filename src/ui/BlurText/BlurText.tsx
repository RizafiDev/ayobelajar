import { motion, type Transition } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

// Tipe properti untuk komponen BlurText
type BlurTextProps = {
  text?: string; // Teks yang ingin dianimasikan
  delay?: number; // Delay animasi antar huruf/kata (dalam milidetik)
  className?: string; // Kelas tambahan CSS
  animateBy?: "words" | "letters"; // Animasi berdasarkan kata atau huruf
  direction?: "top" | "bottom"; // Arah animasi blur (dari atas atau bawah)
  threshold?: number; // Threshold untuk IntersectionObserver
  rootMargin?: string; // Root margin untuk IntersectionObserver
  animationFrom?: Record<string, string | number>; // Properti animasi awal (opsional)
  animationTo?: Array<Record<string, string | number>>; // Langkah-langkah animasi menuju akhir
  easing?: (t: number) => number; // Fungsi easing kustom
  onAnimationComplete?: () => void; // Fungsi callback ketika animasi selesai
  stepDuration?: number; // Durasi per langkah animasi dalam detik
};

// Fungsi untuk membuat keyframes dari properti "from" dan array "to"
const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

// Komponen utama BlurText
const BlurText: React.FC<BlurTextProps> = ({
  text = "", // Default teks kosong jika tidak diberikan
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  // Pisahkan teks menjadi kata-kata atau huruf berdasarkan animateBy
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const [inView, setInView] = useState(false); // Status apakah elemen terlihat di layar
  const ref = useRef<HTMLParagraphElement>(null); // Referensi elemen <p>

  // Observer untuk memicu animasi ketika elemen masuk viewport
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Properti default untuk animasi awal (blur dan geser dari atas/bawah)
  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  // Properti default untuk animasi akhir secara bertahap (mengurangi blur)
  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  // Gunakan properti kustom jika tersedia, jika tidak gunakan default
  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);

  // Membuat waktu-waktu (times) untuk setiap step animasi
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => {
        // Bangun keyframes untuk setiap huruf/kata
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        // Konfigurasi transisi untuk animasi Framer Motion
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000, // Konversi delay ke detik
        };
        // Tambahkan easing kustom jika ada
        (spanTransition as any).ease = easing;

        return (
          <motion.span
            key={index}
            initial={fromSnapshot} // Nilai awal
            animate={inView ? animateKeyframes : fromSnapshot} // Animasikan hanya jika terlihat
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {/* Gunakan spasi khusus agar tidak terpotong */}
            {segment === " " ? "\u00A0" : segment}
            {/* Tambahkan spasi eksplisit jika animasi per kata */}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
