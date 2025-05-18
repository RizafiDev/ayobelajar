import goal from "../assets/heading/goal.svg";
import { CheckBadgeIcon as CheckIcon } from "@heroicons/react/24/solid";
function Benefit() {
  return (
    <section
      id="benefit"
      className="container flex items-center  w-full mx-auto px-6 md:px-28 text-textblack py-16"
    >
      <div className="wrapper w-full items-center flex justify-between gap-6">
        <div
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          className="goals-img w-full"
        >
          <img src={goal} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-once="false"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          className="text-content flex flex-col items-start text-start w-full gap-3"
        >
          <p className="font-semibold text-xl text-primary">
            Belajar Nyaman, Masa Depan Gemilang
          </p>
          <h1 className="font-bold text-4xl">
            Keuntungan Eksklusif Hanya <br />
            di BelajarYuk!📌
          </h1>
          <ul className="flex flex-col items-start text-start gap-3">
            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" />
              <p className="text-xl font-semibold">
                Kurikulum Terstruktur & Up-to-Date
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" />
              <p className="text-xl font-semibold">
                Mentor Profesional & Berpengalaman
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" />
              <p className="text-xl font-semibold">Portofolio Siap Kerja</p>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" />
              <p className="text-xl font-semibold">
                Kelas Fleksibel & Bersertifikat
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-6 text-success" />
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
