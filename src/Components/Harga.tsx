import { CheckIcon } from "@heroicons/react/24/solid";

/**
 * Komponen Harga menampilkan paket investasi belajar dalam 3 plan berbeda,
 * lengkap dengan fitur, harga, dan benefitnya.
 * Dilengkapi dengan animasi AOS dan aksesibilitas via ARIA.
 */
function Harga() {
  return (
    <section
      id="harga"
      aria-labelledby="harga-title"
      className="container flex flex-col gap-12 items-center justify-center w-full mx-auto px-6 md:px-28 text-textblack py-16"
    >
      {/* Header Section */}
      <header
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="header w-full items-center text-center flex flex-col gap-4"
      >
        {/* Judul utama bagian harga */}
        <h2 id="harga-title" className="text-4xl font-bold">
          Investasi Terbaik untuk Masa Depanmu🎯
        </h2>
        {/* Deskripsi singkat */}
        <p className="font-normal text-xl text-textblack/70">
          Seluruh paket didesain untuk bantu kamu belajar secara fleksibel,
          <br />
          mendalam, dan siap kerja di industri digital.
        </p>
      </header>

      {/* List paket harga */}
      <div className="price-wrapper">
        <ul
          role="list"
          className="flex items-center justify-center gap-6"
          aria-label="Daftar paket harga investasi belajar"
        >
          {/* Basic Plan */}
          <li
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center items-center flex flex-col gap-6 bg-white border shadow border-textblack/20 py-10 px-10 rounded-2xl"
          >
            {/* Nama paket */}
            <h3 className="font-semibold text-3xl" tabIndex={0}>
              Basic Plan🙎‍♂️
            </h3>
            {/* Deskripsi singkat paket */}
            <p className="font-light text-base text-textblack/70">
              Cocok untuk kamu yang ingin coba <br />
              satu topik dulu
            </p>

            {/* Harga */}
            <div
              className="price items-baseline flex gap-1 text-center justify-center"
              aria-label="Harga paket Basic Plan"
            >
              <p className="font-semibold text-4xl text-center">IDR 149.000</p>
              <p className="font-medium text-sm text-textblack/70 text-center">
                / kelas
              </p>
            </div>

            {/* Fitur/benefit paket */}
            <div className="benefit-itema">
              <ul
                role="list"
                className="flex flex-col gap-4"
                aria-label="Fitur Basic Plan"
              >
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">Akses 1 kelas pilihan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">Sertifikat kelulusan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Materi video seumur hidup
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Komunitas belajar (basic group)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Download modul & file latihan
                  </p>
                </li>
              </ul>
            </div>
          </li>

          {/* Pro Plan */}
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center items-center flex flex-col gap-6 bg-white border shadow border-textblack/20 py-10 px-10 rounded-2xl"
          >
            <h3 className="font-semibold text-3xl" tabIndex={0}>
              Pro Plan👩‍🎓
            </h3>
            <p className="font-light text-base text-textblack/70">
              Untuk kamu yang serius upgrade skill <br />
              secara konsisten
            </p>
            <div
              className="price items-baseline flex gap-1 text-center justify-center"
              aria-label="Harga paket Pro Plan"
            >
              <p className="font-semibold text-4xl text-center">IDR 449.000</p>
              <p className="font-medium text-sm text-textblack/70 text-center">
                / bulan
              </p>
            </div>
            <div className="benefit-itema">
              <ul
                role="list"
                className="flex flex-col gap-4"
                aria-label="Fitur Pro Plan"
              >
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Akses semua kelas di semua kategori
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">Live mentoring mingguan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">Sertifikat premium</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Review tugas & feedback dari mentor
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Akses komunitas premium (Discord)
                  </p>
                </li>
              </ul>
            </div>
          </li>

          {/* Expert Plan */}
          <li
            data-aos="fade-left"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center items-center flex flex-col gap-6 bg-white border shadow border-textblack/20 py-10 px-10 rounded-2xl"
          >
            <h3 className="font-semibold text-3xl" tabIndex={0}>
              Expert Plan👩‍💻
            </h3>
            <p className="font-light text-base text-textblack/70">
              Solusi all-in-one untuk siap kerja dan <br />
              bangun karir digital
            </p>
            <div
              className="price items-baseline flex gap-1 text-center justify-center"
              aria-label="Harga paket Expert Plan"
            >
              <p className="font-semibold text-4xl text-center">
                IDR 1.299.000
              </p>
              <p className="font-medium text-sm text-textblack/70 text-center">
                / 6 bulan
              </p>
            </div>
            <div className="benefit-itema">
              <ul
                role="list"
                className="flex flex-col gap-4"
                aria-label="Fitur Expert Plan"
              >
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">Semua fitur Pro Plan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">Career coaching 1-on-1</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm text-start">
                    Portofolio proyek real client
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm">
                    Simulasi wawancara kerja & CV review
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon
                    className="w-5 h-5 text-success"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <p className="font-medium text-sm text-start">
                    Akses bonus eksklusif
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Harga;
