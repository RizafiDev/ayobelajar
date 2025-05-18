import { useState, useEffect, useRef, useCallback } from "react";

function Navbar() {
  const [, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("kelas");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const navItemsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: "kelas", name: "Kelas" },
    { id: "benefit", name: "Benefit" },
    { id: "harga", name: "Harga" },
    { id: "rating", name: "Rating" },
    { id: "faq", name: "FAQ" },
    { id: "tentang", name: "Tentang Kami" },
  ];

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      const isDark = JSON.parse(savedDarkMode);
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleNavClick = useCallback((id: string) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }, []);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    },
    []
  );

  const setNavItemRef = useCallback(
    (id: string) => (el: HTMLLIElement | null) => {
      navItemsRef.current[id] = el;
    },
    []
  );

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      const scrolled = currentScrollY > 50;
      setIsScrolled(scrolled);

      if (timeoutId) clearTimeout(timeoutId);

      if (scrolled) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsVisible(false);
        } else if (lastScrollY - currentScrollY > 5) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      timeoutId = window.setTimeout(() => {
        setIsVisible(true);
      }, 300);

      setLastScrollY(currentScrollY);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            updateIndicator(section.id);
            break;
          }
        }
      }
    };

    const updateIndicator = (sectionId: string) => {
      const navItem = navItemsRef.current[sectionId];
      if (navItem) {
        const left = navItem.offsetLeft;
        const width = navItem.offsetWidth;
        setIndicatorStyle({ left, width });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize
    setTimeout(() => {
      updateIndicator(activeSection);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, activeSection, sections]);

  const bgOpacity = Math.min(scrollY / 150, 1);
  const bgColor = darkMode
    ? `rgba(15, 23, 42, ${bgOpacity})` // dark: bg-slate-900
    : `rgba(255, 255, 255, ${bgOpacity})`;

  return (
    <>
      <nav
        className={`fixed flex w-full justify-between items-center py-8 px-6 md:px-12 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundColor: bgColor,
          backdropFilter:
            bgOpacity > 0 ? "saturate(180%) blur(10px)" : undefined,
          color: bgOpacity > 0.5 ? (darkMode ? "#e2e8f0" : "#000") : "#fff",
          boxShadow: bgOpacity > 0.5 ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="brand text-2xl font-semibold">
          Belajar
          <span
            className={` ${
              bgOpacity > 0.5
                ? darkMode
                  ? "text-sky-400"
                  : "text-primary"
                : "text-white"
            }`}
          >
            Yuk!
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-items hidden md:block relative">
          <ul className="flex items-center gap-6">
            {sections.map((section) => (
              <li
                key={section.id}
                className="font-medium text-base relative"
                ref={setNavItemRef(section.id)}
              >
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section.id);
                  }}
                  className={`${
                    activeSection === section.id
                      ? bgOpacity > 0.5
                        ? darkMode
                          ? "text-slate-200"
                          : "text-black"
                        : "text-white"
                      : bgOpacity > 0.5
                      ? darkMode
                        ? "text-slate-400"
                        : "text-gray-600"
                      : "text-gray-300"
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Active indicator */}
          <div
            className="absolute bottom-0 h-0.5 bg-primary dark:bg-sky-400 transition-all duration-300"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              transform: `translateY(8px)`,
            }}
          />
        </div>

        {/* Desktop CTA Buttons and Dark Mode Toggle */}
        <div className="cta hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            className={`border-2 rounded-md py-2 px-6 ${
              bgOpacity > 0.5
                ? darkMode
                  ? "text-slate-200 border-slate-200"
                  : "text-black border-black"
                : "text-white border-white"
            }`}
            onClick={handleButtonClick}
          >
            Login
          </button>
          <button
            className={`rounded-md py-2 px-6 ${
              bgOpacity > 0.5
                ? darkMode
                  ? "text-slate-900 bg-slate-200"
                  : "text-white bg-black"
                : "text-primary bg-white"
            }`}
            onClick={handleButtonClick}
          >
            Register
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span
              className={`block h-0.5 w-6 transition-all ${
                bgOpacity > 0.5
                  ? darkMode
                    ? "bg-slate-200"
                    : "bg-black"
                  : "bg-white"
              } ${isSidebarOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 transition-all ${
                bgOpacity > 0.5
                  ? darkMode
                    ? "bg-slate-200"
                    : "bg-black"
                  : "bg-white"
              } ${isSidebarOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 transition-all ${
                bgOpacity > 0.5
                  ? darkMode
                    ? "bg-slate-200"
                    : "bg-black"
                  : "bg-white"
              } ${isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full dark:bg-slate-900 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <div className="brand text-2xl font-semibold dark:text-slate-200 text-black">
              Belajar
              <span className="text-primary dark:text-sky-400">Yuk!</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Dark Mode Toggle for Mobile */}
          <div className="mb-6 flex justify-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none"
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.id} className="font-medium text-base">
                  <a
                    href={`#${section.id}`}
                    className={`block py-2 ${
                      activeSection === section.id
                        ? "text-primary dark:text-sky-400"
                        : "text-gray-800 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section.id);
                    }}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <button
              className="w-full border-2 border-black dark:border-slate-200 rounded-md py-2 px-6 text-black dark:text-slate-200"
              onClick={handleButtonClick}
            >
              Login
            </button>
            <button
              className="w-full rounded-md py-2 px-6 text-white dark:text-slate-900 bg-black dark:bg-slate-200"
              onClick={handleButtonClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
