import goal from "../assets/heading/goal.svg";
import { CheckBadgeIcon as CheckIcon } from "@heroicons/react/24/solid";

function Benefit() {
  return (
    // Section utama, diberi aria-label untuk menjelaskan konteks bagian ini
    <section
      id="benefit"
      className="container flex items-center w-full mx-auto px-6 md:px-28 text-textblack py-16"
      aria-label="Keuntungan eksklusif belajar di BelajarYuk"
      role="region"
    >
      <div className="wrapper w-full items-center flex justify-between gap-6">
        {/* Gambar ilustrasi tujuan belajar, beri role img dan deskripsi alternatif yang informatif */}
        <div
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          className="goals-img w-full"
        >
          <img
            src={goal}
            alt="Ilustrasi keuntungan belajar nyaman dan masa depan gemilang"
            role="img"
            aria-hidden="false"
            loading="lazy" // untuk SEO/performance
          />
        </div>

        {/* Konten teks utama, gunakan heading semantic agar SEO terbantu */}
        <div
          data-aos="fade-left"
          data-aos-once="false"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          className="text-content flex flex-col items-start text-start w-full gap-3"
        >
          {/* Paragraf pembuka sebagai subheading */}
          <p className="font-semibold text-xl text-primary">
            Belajar Nyaman, Masa Depan Gemilang
          </p>

          {/* Heading utama yang penting untuk SEO, gunakan tag h2 jika section ini di bawah h1 */}
          <h2 className="font-bold text-4xl">
            Keuntungan Eksklusif Hanya <br />
            di BelajarYuk!📌
          </h2>

          {/* List keuntungan, gunakan <ul> dengan role list untuk aksesibilitas */}
          <ul
            className="flex flex-col items-start text-start gap-3"
            role="list"
            aria-label="Daftar keuntungan belajar di BelajarYuk"
          >
            {/* Tiap item list diberi role listitem secara implisit */}
            <li className="flex items-center gap-2">
              <CheckIcon
                className="size-6 text-success"
                aria-hidden="true" // ikon dekoratif, abaikan screen reader
              />
              <p className="text-xl font-semibold">
                Kurikulum Terstruktur & Up-to-Date
              </p>
            </li>

            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" aria-hidden="true" />
              <p className="text-xl font-semibold">
                Mentor Profesional & Berpengalaman
              </p>
            </li>

            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" aria-hidden="true" />
              <p className="text-xl font-semibold">Portofolio Siap Kerja</p>
            </li>

            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" aria-hidden="true" />
              <p className="text-xl font-semibold">
                Kelas Fleksibel & Bersertifikat
              </p>
            </li>

            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" aria-hidden="true" />
              <p className="text-xl font-semibold">
                Komunitas Aktif & Career Support
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Benefit;
