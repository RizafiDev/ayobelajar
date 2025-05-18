import { useRef, useEffect, useState, type ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode; // Konten yang akan diberi efek fade in dan blur
  blur?: boolean; // Apakah ingin efek blur saat konten belum muncul
  duration?: number; // Durasi transisi dalam milidetik
  easing?: string; // Fungsi easing untuk transisi CSS
  delay?: number; // Delay sebelum animasi mulai, dalam milidetik
  threshold?: number; // Threshold intersection observer, seberapa banyak elemen terlihat
  initialOpacity?: number; // Opacity awal sebelum elemen terlihat (default 0 = transparan)
  className?: string; // Class tambahan untuk div pembungkus
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  // State untuk menandai apakah elemen sudah terlihat di viewport
  const [inView, setInView] = useState(false);

  // Ref ke elemen DOM yang ingin dipantau visibilitasnya
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Membuat instance IntersectionObserver untuk memantau visibilitas elemen
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ketika elemen mulai terlihat di viewport sesuai threshold
        if (entry.isIntersecting) {
          // Berhenti memantau elemen agar efek fade hanya terjadi sekali
          observer.unobserve(element);

          // Menunggu delay sebelum mengubah state inView menjadi true
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold } // Threshold menentukan seberapa besar proporsi elemen yang harus terlihat
    );

    // Mulai memantau elemen
    observer.observe(element);

    // Bersihkan observer saat komponen unmount
    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        // Atur opacity berdasarkan apakah elemen sudah terlihat
        opacity: inView ? 1 : initialOpacity,

        // Transisi animasi untuk opacity dan filter (blur)
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,

        // Terapkan blur saat elemen belum terlihat jika props blur aktif
        filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
