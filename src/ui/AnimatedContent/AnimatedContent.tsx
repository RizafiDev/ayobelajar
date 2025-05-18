import { useRef, useEffect, useState, type ReactNode } from "react";
import { useSpring, animated, type SpringConfig } from "@react-spring/web";

// Interface untuk mendefinisikan properti yang diterima oleh komponen
interface AnimatedContentProps {
  children: ReactNode; // Elemen anak yang akan dianimasikan
  distance?: number; // Jarak animasi awal (default: 100px)
  direction?: "vertical" | "horizontal"; // Arah animasi (vertikal atau horizontal)
  reverse?: boolean; // Jika true, animasi dimulai dari arah sebaliknya
  config?: SpringConfig; // Konfigurasi animasi (tension dan friction)
  initialOpacity?: number; // Nilai opacity saat awal (sebelum masuk viewport)
  animateOpacity?: boolean; // Apakah opacity ikut dianimasikan
  scale?: number; // Skala awal sebelum animasi
  threshold?: number; // Threshold untuk IntersectionObserver
  delay?: number; // Delay sebelum animasi dimulai saat terlihat
}

// Komponen AnimatedContent untuk memberikan animasi masuk ketika elemen terlihat di viewport
const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}) => {
  const [inView, setInView] = useState(false); // Menyimpan status apakah elemen sudah terlihat
  const ref = useRef<HTMLDivElement | null>(null); // Referensi ke elemen div untuk IntersectionObserver

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Membuat observer untuk mendeteksi apakah elemen terlihat di viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jika elemen terlihat, hentikan pengamatan dan jalankan animasi setelah delay
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold } // Mengatur seberapa banyak elemen harus terlihat agar dianggap "terlihat"
    );

    observer.observe(element); // Mulai observasi

    return () => observer.disconnect(); // Bersihkan observer saat komponen unmount
  }, [threshold, delay]);

  // Mapping arah animasi ke properti CSS transform (X untuk horizontal, Y untuk vertical)
  const directions: Record<"vertical" | "horizontal", string> = {
    vertical: "Y",
    horizontal: "X",
  };

  // Properti animasi dengan react-spring
  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${
        reverse ? `-${distance}px` : `${distance}px`
      }) scale(${scale})`, // Posisi awal (digeser + skala)
      opacity: animateOpacity ? initialOpacity : 1, // Opacity awal jika animasi opacity aktif
    },
    to: inView
      ? {
          transform: `translate${directions[direction]}(0px) scale(1)`, // Posisi akhir (normal)
          opacity: 1, // Opacity akhir
        }
      : undefined, // Jangan animasi jika belum terlihat
    config, // Konfigurasi animasi
  });

  return (
    // animated.div dari react-spring untuk menerapkan animasi
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
