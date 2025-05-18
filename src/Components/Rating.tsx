import rizky from "../assets/profile/rizky.svg";
import nadia from "../assets/profile/nadia.svg";
import sinta from "../assets/profile/sinta.svg";
import { RiStarSmileFill } from "@remixicon/react";
function Rating() {
  return (
    <section className="container flex flex-col gap-12 items-center justify-center w-full mx-auto px-6 md:px-28 text-textblack py-16">
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="header w-full items-center text-center flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold">
          Mereka Sudah Mencoba, Sekarang Giliran Kamu👊
        </h1>
        <p className="font-normal text-xl text-textblack/70">
          Dengarkan langsung pengalaman para pengguna BelajarYuk! dan <br />
          bagaimana platform ini mengubah cara mereka belajar.
        </p>
      </div>
      <div className="price-wrapper ">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <div className="profile flex items-center gap-4 bg-primary/5 py-6 px-9 rounded-t-2xl border-l border-r border-t border-textblack/20">
              <img src={rizky} alt="" />
              <div className="data-user">
                <p className="font-semibold text-lg">Rizky</p>
                <p className="font-normal text-sm">Pelajar SMA</p>
              </div>
            </div>
            <div className="rating flex flex-col gap-6 items-start py-8 px-9 rounded-b-2xl bg-white border-l border-r border-b border-textblack/20">
              <div className="star flex items-center gap-3">
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
              </div>
              <p className="text-sm font-normal max-w-64">
                Awalnya cuma coba-coba, tapi ternyata materinya seru dan gampang
                dipahami. Sekarang jadi makin semangat belajar buat UTBK!
              </p>
              <p className="font-semibold text-sm text-primary">
                Lihat cerita lengkapnya
              </p>
            </div>
          </li>
          <li>
            <div className="profile flex items-center gap-4 bg-primary/5 py-6 px-9 rounded-t-2xl border-l border-r border-t border-textblack/20">
              <img src={rizky} alt="" />
              <div className="data-user">
                <p className="font-semibold text-lg">Nadia</p>
                <p className="font-normal text-sm">Mahasiswa</p>
              </div>
            </div>
            <div className="rating flex flex-col gap-6 items-start py-8 px-9 rounded-b-2xl bg-white border-l border-r border-b border-textblack/20">
              <div className="star flex items-center gap-3">
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
                <RiStarSmileFill className="size-5 text-primary" />
              </div>
              <p className="text-sm font-normal max-w-64">
                Kelasnya lengkap banget! Dari coding sampai public speaking ada
                semua. Ngebantu banget buat nambah skill di luar kampus.
              </p>
              <p className="font-semibold text-sm text-primary">
                Lihat cerita lengkapnya
              </p>
            </div>
          </li>
          <li>
            <div className="profile flex items-center gap-4 bg-primary/5 py-6 px-9 rounded-t-2xl border-l border-r border-t border-textblack/20">
              <img src={rizky} alt="" />
              <div className="data-user">
                <p className="font-semibold text-lg">Sinta</p>
                <p className="font-normal text-sm">Customer Service</p>
              </div>
            </div>
            <div className="rating flex flex-col gap-6 items-start py-8 px-9 rounded-b-2xl bg-white border-l border-r border-b border-textblack/20">
              <div className="star flex items-center gap-3">
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
              <p className="font-semibold text-sm text-primary">
                Lihat cerita lengkapnya
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Rating;
