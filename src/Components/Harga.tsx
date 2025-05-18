import { CheckIcon } from "@heroicons/react/24/solid";
function Harga() {
  return (
    <section
      id="harga"
      className="container flex flex-col gap-12 items-center justify-center w-full mx-auto px-6 md:px-28 text-textblack py-16"
    >
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="header w-full items-center text-center flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold">
          Investasi Terbaik untuk Masa Depanmu🎯
        </h1>
        <p className="font-normal text-xl text-textblack/70">
          Seluruh paket didesain untuk bantu kamu belajar secara fleksibel,
          <br />
          mendalam, dan siap kerja di industri digital.
        </p>
      </div>
      <div className="price-wrapper ">
        <ul className="flex items-center justify-center gap-6">
          <li
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center items-center flex flex-col  gap-6 bg-white border shadow border-textblack/20 py-10 px-10 rounded-2xl"
          >
            <p className="font-semibold text-3xl">Basic Plan🙎‍♂️</p>
            <p className="font-light text-base text-textblack/70">
              Cocok untuk kamu yang ingin coba <br />
              satu topik dulu
            </p>
            <div className="price items-baseline flex gap-1 text-center justify-center">
              <p className="font-semibold text-4xl text-center">IDR 149.000</p>
              <p className="font-medium text-sm text-textblack/70 text-center">
                / kelas
              </p>
            </div>
            <div className="benefit-itema">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">Akses 1 kelas pilihan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">Sertifikat kelulusan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Materi video seumur hidup
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Komunitas belajar (basic group)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Download modul & file latihan
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center items-center flex flex-col  gap-6 bg-white border shadow border-textblack/20 py-10 px-10 rounded-2xl"
          >
            <p className="font-semibold text-3xl">Pro Plan👩‍🎓</p>
            <p className="font-light text-base text-textblack/70">
              Untuk kamu yang serius upgrade skill <br />
              secara konsisten
            </p>
            <div className="price items-baseline flex gap-1 text-center justify-center">
              <p className="font-semibold text-4xl text-center">IDR 449.000</p>
              <p className="font-medium text-sm text-textblack/70 text-center">
                / bulan
              </p>
            </div>
            <div className="benefit-itema">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Akses semua kelas di semua kategori
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">Live mentoring mingguan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">Sertifikat premium</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Review tugas & feedback dari mentor
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Akses komunitas premium (Discord)
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center items-center flex flex-col  gap-6 bg-white border shadow border-textblack/20 py-10 px-10 rounded-2xl"
          >
            <p className="font-semibold text-3xl">Expert Plan👩‍💻</p>
            <p className="font-light text-base text-textblack/70">
              Solusi all-in-one untuk siap kerja dan <br />
              bangun karir digital
            </p>
            <div className="price items-baseline flex gap-1 text-center justify-center">
              <p className="font-semibold text-4xl text-center">
                IDR 1.299.000
              </p>
              <p className="font-medium text-sm text-textblack/70 text-center">
                / 6 bulan
              </p>
            </div>
            <div className="benefit-itema">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">Semua fitur Pro Plan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">Career coaching 1-on-1</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm text-start">
                    Portofolio proyek real client
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
                  <p className="font-medium text-sm">
                    Simulasi wawancara kerja & CV review
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-success" />
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
