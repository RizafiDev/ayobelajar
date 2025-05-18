import React from "react";

export const Footer: React.FC = () => {
  return (
    // Footer utama website dengan role footer
    <footer className="bg-white dark:bg-gray-900" role="contentinfo">
      {/* Container utama dengan padding responsif */}
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Bagian atas footer: logo dan navigasi link */}
        <div className="md:flex md:justify-between">
          {/* Logo dan nama brand */}
          <div className="mb-6 md:mb-0">
            <a
              href="https://flowbite.com/"
              className="flex items-center"
              aria-label="Flowbite homepage"
              tabIndex={0}
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
                role="img"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>

          {/* Menu navigasi dengan 3 kolom */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"
          >
            {/* Kolom Resources */}
            <section aria-labelledby="footer-resources">
              <h2
                id="footer-resources"
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </section>

            {/* Kolom Follow us */}
            <section aria-labelledby="footer-followus">
              <h2
                id="footer-followus"
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </section>

            {/* Kolom Legal */}
            <section aria-labelledby="footer-legal">
              <h2
                id="footer-legal"
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>

        {/* Garis pemisah */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bagian bawah footer: copyright dan ikon sosial media */}
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Informasi copyright */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>

          {/* Ikon sosial media */}
          <div
            className="flex mt-4 sm:justify-center sm:mt-0"
            role="list"
            aria-label="Social media links"
          >
            {/* Ikon Facebook */}
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Facebook page"
              tabIndex={0}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.243l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* Ikon Twitter */}
            <a
              href="#"
              className="ml-6 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Twitter page"
              tabIndex={0}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.867 9.867 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.379 4.482A13.945 13.945 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.195 9.723a4.9 4.9 0 0 1-2.228-.616v.06a4.918 4.918 0 0 0 3.946 4.816 4.902 4.902 0 0 1-2.224.085 4.919 4.919 0 0 0 4.588 3.417A9.865 9.865 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* Ikon Instagram */}
            <a
              href="#"
              className="ml-6 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Instagram page"
              tabIndex={0}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.324.975.975 1.262 2.243 1.324 3.608.058 1.266.069 1.645.069 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.243 1.262-3.608 1.324-1.266.058-1.645.069-4.85.069-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.243-1.324-3.608C2.175 15.746 2.163 15.367 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.35-2.633 1.324-3.608.975-.975 2.243-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.127 4.53.4 3.388 1.542 2.247 2.683 1.975 3.935 1.917 5.206.859 8.332.859 8.741.859 12c0 3.259.012 3.668.07 4.948.058 1.271.33 2.523 1.472 3.665 1.141 1.141 2.393 1.414 3.665 1.472 1.28.058 1.689.07 4.948.07 3.259 0 3.668-.012 4.948-.07 1.271-.058 2.523-.33 3.665-1.472 1.141-1.141 1.414-2.393 1.472-3.665.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948-.058-1.271-.33-2.523-1.472-3.665C19.418.4 18.166.127 16.895.07 15.615.012 15.206 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.881 0 1.44 1.44 0 0 0 2.881 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
