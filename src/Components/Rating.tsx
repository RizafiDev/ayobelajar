import rizky from "../assets/profile/rizky.svg";
import nadia from "../assets/profile/nadia.svg";
import sinta from "../assets/profile/sinta.svg";
import { RiStarSmileFill } from "@remixicon/react";

/**
 * Komponen Rating menampilkan testimoni dan rating dari pengguna platform BelajarYuk!
 * Menggunakan gambar profil, nama, pekerjaan, serta ulasan singkat.
 * Setiap testimoni memiliki rating 5 bintang dengan ikon bintang yang diwarnai.
 * Menggunakan AOS untuk animasi muncul.
 * Menggunakan aria-label untuk aksesibilitas pada list dan rating.
 */
function Rating() {
  return (
    <section
      id="rating"
      aria-labelledby="rating-title"
      className="container flex flex-col gap-12 items-center justify-center w-full mx-auto px-6 md:px-28 text-textblack py-16"
    >
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="header w-full items-center text-center flex flex-col gap-4"
      >
        <h1 id="rating-title" className="text-4xl font-bold">
          Mereka Sudah Mencoba, Sekarang Giliran Kamu👊
        </h1>
        <p className="font-normal text-xl text-textblack/70">
          Dengarkan langsung pengalaman para pengguna BelajarYuk! dan <br />
          bagaimana platform ini mengubah cara mereka belajar.
        </p>
      </div>

      {/* List Testimoni */}
      <div className="price-wrapper">
        <ul
          role="list"
          aria-label="Testimoni pengguna BelajarYuk!"
          className="flex items-center justify-center gap-6"
        >
          {/* Item Rizky */}
          <li
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="max-w-xs"
          >
            <article
              aria-labelledby="rizky-name rizky-job"
              className="shadow-lg rounded-2xl overflow-hidden"
            >
              <header className="profile flex items-center gap-4 bg-primary/5 py-6 px-9 border-b border-textblack/20">
                <img
                  src={rizky}
                  alt="Foto profil Rizky"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="data-user">
                  <p id="rizky-name" className="font-semibold text-lg">
                    Rizky
                  </p>
                  <p id="rizky-job" className="font-normal text-sm">
                    Pelajar SMA
                  </p>
                </div>
              </header>
              <section
                aria-label="Testimoni Rizky"
                className="rating flex flex-col gap-6 items-start py-8 px-9 bg-white"
              >
                <div
                  className="star flex items-center gap-3"
                  role="img"
                  aria-label="Rating 5 dari 5 bintang"
                >
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                </div>
                <p className="text-sm font-normal max-w-64">
                  Awalnya cuma coba-coba, tapi ternyata materinya seru dan
                  gampang dipahami. Sekarang jadi makin semangat belajar buat
                  UTBK!
                </p>
                <button
                  aria-label="Lihat cerita lengkap Rizky"
                  className="font-semibold text-sm text-primary underline cursor-pointer bg-transparent border-none p-0"
                  onClick={() =>
                    alert("Fitur cerita lengkap Rizky belum tersedia")
                  }
                >
                  Lihat cerita lengkapnya
                </button>
              </section>
            </article>
          </li>

          {/* Item Nadia */}
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="max-w-xs"
          >
            <article
              aria-labelledby="nadia-name nadia-job"
              className="shadow-lg rounded-2xl overflow-hidden"
            >
              <header className="profile flex items-center gap-4 bg-primary/5 py-6 px-9 border-b border-textblack/20">
                <img
                  src={nadia}
                  alt="Foto profil Nadia"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="data-user">
                  <p id="nadia-name" className="font-semibold text-lg">
                    Nadia
                  </p>
                  <p id="nadia-job" className="font-normal text-sm">
                    Mahasiswa
                  </p>
                </div>
              </header>
              <section
                aria-label="Testimoni Nadia"
                className="rating flex flex-col gap-6 items-start py-8 px-9 bg-white"
              >
                <div
                  className="star flex items-center gap-3"
                  role="img"
                  aria-label="Rating 5 dari 5 bintang"
                >
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                </div>
                <p className="text-sm font-normal max-w-64">
                  Kelasnya lengkap banget! Dari coding sampai public speaking
                  ada semua. Ngebantu banget buat nambah skill di luar kampus.
                </p>
                <button
                  aria-label="Lihat cerita lengkap Nadia"
                  className="font-semibold text-sm text-primary underline cursor-pointer bg-transparent border-none p-0"
                  onClick={() =>
                    alert("Fitur cerita lengkap Nadia belum tersedia")
                  }
                >
                  Lihat cerita lengkapnya
                </button>
              </section>
            </article>
          </li>

          {/* Item Sinta */}
          <li
            data-aos="fade-left"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="max-w-xs"
          >
            <article
              aria-labelledby="sinta-name sinta-job"
              className="shadow-lg rounded-2xl overflow-hidden"
            >
              <header className="profile flex items-center gap-4 bg-primary/5 py-6 px-9 border-b border-textblack/20">
                <img
                  src={sinta}
                  alt="Foto profil Sinta"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="data-user">
                  <p id="sinta-name" className="font-semibold text-lg">
                    Sinta
                  </p>
                  <p id="sinta-job" className="font-normal text-sm">
                    Customer Service
                  </p>
                </div>
              </header>
              <section
                aria-label="Testimoni Sinta"
                className="rating flex flex-col gap-6 items-start py-8 px-9 bg-white"
              >
                <div
                  className="star flex items-center gap-3"
                  role="img"
                  aria-label="Rating 5 dari 5 bintang"
                >
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                  <RiStarSmileFill className="size-5 text-primary" />
                </div>
                <p className="text-sm font-normal max-w-64">
                  BelajarYuk! bikin aku bisa belajar kapan aja setelah pulang
                  kerja. Materi singkat tapi langsung to the point.
                </p>
                <button
                  aria-label="Lihat cerita lengkap Sinta"
                  className="font-semibold text-sm text-primary underline cursor-pointer bg-transparent border-none p-0"
                  onClick={() =>
                    alert("Fitur cerita lengkap Sinta belum tersedia")
                  }
                >
                  Lihat cerita lengkapnya
                </button>
              </section>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Rating;
