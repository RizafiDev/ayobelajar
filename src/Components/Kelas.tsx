import html from "../assets/logo/html.svg";
import css from "../assets/logo/css.svg";
import canva from "../assets/logo/canva.svg";
import figma from "../assets/logo/figma.svg";
import python from "../assets/logo/python.svg"; // rename phyton → python
import server from "../assets/logo/server.svg";
import sheet from "../assets/logo/spreadsheet.svg";
import sql from "../assets/logo/sql.svg";

import { ChevronDoubleRightIcon as BackIcon } from "@heroicons/react/24/solid";

/**
 * Component Kelas
 * Menampilkan daftar kelas unggulan dengan logo dan deskripsi singkat.
 * Masing-masing kelas memiliki card interaktif dengan efek hover.
 */
function Kelas() {
  return (
    <section
      id="kelas"
      aria-labelledby="kelas-title"
      className="container px-6 md:px-28 w-full mx-auto py-16 gap-6 flex flex-col items-start text-textblack"
    >
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="header"
      >
        {/* Heading with aria for SEO and accessibility */}
        <h1
          id="kelas-title"
          className="text-4xl font-bold"
          tabIndex={0} // allow keyboard focus for screen reader users
        >
          Beberapa Kelas <br />
          Unggulan🥇
        </h1>
      </div>

      {/* Card List */}
      <div
        className="card w-full"
        role="list"
        aria-label="Daftar kelas unggulan"
      >
        <ul className="grid grid-cols-4 w-full gap-4">
          {/* Card 1 - Website Dev */}
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="flex flex-col items-start"
            role="listitem"
          >
            <div
              tabIndex={0}
              role="button"
              aria-describedby="desc-webdev"
              aria-label="Kelas Website Dev Frontend dan Backend"
              className="group bg-white p-6 rounded-2xl gap-4 shadow hover:scale-95 transition-all ease-in-out duration-150 cursor-pointer w-full flex flex-col items-start"
            >
              {/* Logos */}
              <div className="logo flex items-center gap-2" aria-hidden="true">
                <img
                  src={html}
                  alt="Logo HTML"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={css}
                  alt="Logo CSS"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Text Content */}
              <div className="wrapper-text flex items-center w-full justify-between">
                <div className="text flex flex-col items-start text-start">
                  <p id="desc-webdev" className="text-2xl font-bold">
                    Website Dev
                  </p>
                  <p className="font-medium text-base">Frontend & Backend</p>
                </div>
                <div className="arrow flex" aria-hidden="true">
                  <BackIcon className="size-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </li>

          {/* Card 2 - Design */}
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="350"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="flex flex-col items-start"
            role="listitem"
          >
            <div
              tabIndex={0}
              role="button"
              aria-describedby="desc-design"
              aria-label="Kelas Design UI/UX dan Graphic"
              className="group bg-white p-6 rounded-2xl gap-4 shadow hover:scale-95 transition-all ease-in-out duration-150 cursor-pointer w-full flex flex-col items-start"
            >
              <div className="logo flex items-center gap-2" aria-hidden="true">
                <img
                  src={figma}
                  alt="Logo Figma"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(126,58,242,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={canva}
                  alt="Logo Canva"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="wrapper-text flex items-center w-full justify-between">
                <div className="text flex flex-col items-start text-start">
                  <p id="desc-design" className="text-2xl font-bold">
                    Design
                  </p>
                  <p className="font-medium text-base">UI/UX & Graphic</p>
                </div>
                <div className="arrow flex" aria-hidden="true">
                  <BackIcon className="size-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </li>

          {/* Card 3 - AI */}
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex flex-col items-start"
            role="listitem"
          >
            <div
              tabIndex={0}
              role="button"
              aria-describedby="desc-ai"
              aria-label="Kelas AI Machine Learning dan LLM"
              className="group bg-white p-6 rounded-2xl gap-4 shadow hover:scale-95 transition-all ease-in-out duration-150 cursor-pointer w-full flex flex-col items-start"
            >
              <div className="logo flex items-center gap-2" aria-hidden="true">
                <img
                  src={python}
                  alt="Logo Python"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={server}
                  alt="Logo Server"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="wrapper-text flex items-center w-full justify-between">
                <div className="text flex flex-col items-start text-start">
                  <p id="desc-ai" className="text-2xl font-bold">
                    AI
                  </p>
                  <p className="font-medium text-base">
                    Machine Learning & LLM
                  </p>
                </div>
                <div className="arrow flex" aria-hidden="true">
                  <BackIcon className="size-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </li>

          {/* Card 4 - Data Analyst */}
          <li
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="450"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="flex flex-col items-start"
            role="listitem"
          >
            <div
              tabIndex={0}
              role="button"
              aria-describedby="desc-data-analyst"
              aria-label="Kelas Data Analyst Spreadsheet dan SQL"
              className="group bg-white p-6 rounded-2xl gap-4 shadow hover:scale-95 transition-all ease-in-out duration-150 cursor-pointer w-full flex flex-col items-start"
            >
              <div className="logo flex items-center gap-2" aria-hidden="true">
                <img
                  src={sheet}
                  alt="Logo Spreadsheet"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={sql}
                  alt="Logo SQL"
                  className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(79,70,229,0.8)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="wrapper-text flex items-center w-full justify-between">
                <div className="text flex flex-col items-start text-start">
                  <p id="desc-data-analyst" className="text-2xl font-bold">
                    Data Analyst
                  </p>
                  <p className="font-medium text-base">Spreadsheet & SQL</p>
                </div>
                <div className="arrow flex" aria-hidden="true">
                  <BackIcon className="size-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Kelas;
