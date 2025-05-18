import ElipsBackground from "../assets/heading/elipse.svg";
import Learning from "../assets/heading/learning.svg";
import SplitText from "../ui/SplitText/SplitText";
import FadeContent from "../ui/FadeContent/FadeContent";
import { easeCubicOut } from "d3-ease";
import ClickSpark from "../ui/ClickSpark/ClickSpark";

/**
 * Header component sebagai bagian utama landing page
 * Menampilkan headline utama, tagline, tombol call-to-action, dan ilustrasi.
 * Menggunakan animasi teks dan efek visual untuk menarik perhatian pengguna.
 *
 * Aksesibilitas:
 * - Gunakan role="banner" pada header untuk menandakan bagian header utama.
 * - Tombol call-to-action menggunakan teks yang jelas.
 * - Gambar ilustrasi menggunakan alt yang deskriptif.
 * - Background image diberi alt kosong karena hanya dekoratif.
 *
 * SEO:
 * - Heading utama menggunakan tag yang tepat (h1 di SplitText).
 * - Deskripsi tambahan menggunakan paragraf untuk mendukung konten.
 */
function Header() {
  return (
    <header
      id="header"
      role="banner" // Menandakan banner/header utama pada halaman
      className="relative w-full overflow-hidden min-h-screen"
      aria-label="Bagian header situs, menampilkan headline dan tombol aksi"
    >
      {/* Background dekoratif */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <img
          src={ElipsBackground}
          className="absolute top-0 left-0 min-w-full w-full h-full object-cover"
          alt="" // alt kosong karena hanya dekorasi background
          aria-hidden="true"
        />
      </div>

      <ClickSpark
        sparkColor="#ffcc00"
        sparkSize={12}
        sparkRadius={50}
        sparkCount={12}
        duration={800}
        easing="ease-out"
        extraScale={1.2}
      >
        <div className="container mx-auto relative z-10">
          <div
            className="content py-44 px-6 md:px-28 flex flex-col md:flex-row items-center justify-between"
            // main container konten utama
          >
            <div
              className="header w-full md:w-1/2 flex flex-col items-start text-start gap-3"
              // Container teks header di kiri (desktop)
            >
              <FadeContent
                blur={true}
                duration={500}
                delay={2000}
                easing="ease-out"
                initialOpacity={0}
              >
                {/* Tagline pendek */}
                <p className="text-secondary text-xl font-medium">
                  #BelajarInformatikaMudah
                </p>
              </FadeContent>

              {/* Heading utama dengan animasi */}
              <SplitText
                text="Tingkatkan Skillmu Wujudkan Karier Impian"
                className="text-white text-start text-4xl md:text-5xl font-bold leading-tight"
                textAlign="left"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing={easeCubicOut}
                threshold={0.2}
                rootMargin="-50px"
                // Pastikan SplitText menggunakan heading semantic (h1) untuk SEO
              />

              {/* Subheading/deskripsi */}
              <SplitText
                text="Pelajari keahlian baru dengan kurikulum yang dirancang untuk dunia kerja nyata."
                className="font-medium text-lg md:text-xl text-white"
                textAlign="left"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing={easeCubicOut}
                threshold={0.2}
                rootMargin="-50px"
              />

              {/* Tombol Call to Action */}
              <FadeContent
                blur={true}
                duration={1000}
                delay={5000}
                easing="ease-out"
                initialOpacity={0}
              >
                <button
                  className="font-semibold text-center items-center flex text-lg py-3 px-6 rounded-sm text-primary bg-white mt-4"
                  aria-label="Coba 30 Hari gratis untuk belajar informatika"
                  type="button"
                >
                  Coba 30 Hari, GRATIS!⏳
                </button>
              </FadeContent>
            </div>

            {/* Ilustrasi kanan */}
            <FadeContent
              blur={true}
              duration={1000}
              delay={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div
                className="ilustration flex items-center justify-center mt-8 md:mt-0 mr-4 floating-element"
                aria-hidden="true"
              >
                <img
                  src={Learning}
                  alt="Ilustrasi belajar digital"
                  className=""
                  loading="lazy"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </ClickSpark>
    </header>
  );
}

export default Header;
