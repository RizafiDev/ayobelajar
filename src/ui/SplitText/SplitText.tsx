import { useSprings, animated, SpringValue } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string; // Teks yang akan dipecah per huruf dan dianimasikan
  className?: string; // Kelas CSS tambahan untuk elemen paragraf
  delay?: number; // Delay per huruf (ms) sebelum animasi dimulai
  animationFrom?: { opacity: number; transform: string }; // State awal animasi
  animationTo?: { opacity: number; transform: string }; // State akhir animasi
  easing?: (t: number) => number; // Fungsi easing untuk transisi animasi
  threshold?: number; // Threshold IntersectionObserver untuk trigger animasi
  rootMargin?: string; // Margin root untuk IntersectionObserver
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit"; // Text alignment
  onLetterAnimationComplete?: () => void; // Callback ketika semua huruf selesai dianimasikan
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = (t) => t,
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  // Memecah teks menjadi array kata, kemudian array huruf per kata
  const words = text.split(" ").map((w) => w.split(""));
  // Gabungkan semua huruf menjadi satu array datar
  const letters = words.flat();

  // State untuk mendeteksi apakah elemen sudah terlihat di viewport
  const [inView, setInView] = useState(false);
  // Ref untuk elemen paragraf yang di-observe
  const ref = useRef<HTMLParagraphElement>(null);
  // Ref untuk menghitung huruf yang sudah selesai dianimasikan
  const animatedCount = useRef(0);

  useEffect(() => {
    if (!ref.current) return;

    // Setup IntersectionObserver untuk trigger animasi saat elemen masuk viewport
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(ref.current as Element); // Hentikan observasi setelah trigger
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(ref.current);
    return () => obs.disconnect(); // Cleanup observer saat komponen unmount
  }, [threshold, rootMargin]);

  // Buat animasi spring untuk setiap huruf menggunakan react-spring
  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom, // State awal animasi
      to: inView
        ? async (
            next: (step: Record<string, string | number>) => Promise<void>
          ) => {
            await next(animationTo); // Jalankan animasi ke state akhir
            animatedCount.current += 1; // Tambah hitungan animasi selesai
            // Panggil callback ketika semua huruf selesai dianimasikan
            if (
              animatedCount.current === letters.length &&
              onLetterAnimationComplete
            ) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay, // Delay animasi tiap huruf secara berurutan
      config: { easing }, // Konfigurasi easing animasi
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`} // Container teks dengan overflow tersembunyi agar animasi tidak meluber
      style={{ textAlign: textAlign }} // Atur alignment teks
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.map((letter, lIdx) => {
            // Hitung indeks huruf ke-n secara global
            const index =
              words.slice(0, wIdx).reduce((acc, w) => acc + w.length, 0) + lIdx;

            return (
              <animated.span
                key={index}
                style={
                  {
                    ...springs[index], // Pasang animasi spring ke huruf ini
                    display: "inline-block",
                    willChange: "transform, opacity", // Optimasi performa animasi
                  } as unknown as Record<string, SpringValue | string | number>
                }
              >
                {letter}
              </animated.span>
            );
          })}
          {/* Beri spasi antar kata sebagai elemen inline-block dengan lebar tetap */}
          <span className="inline-block w-[0.3em]">&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
