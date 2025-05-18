import { useState, useEffect } from "react";
import AnimatedContent from "../ui/AnimatedContent/AnimatedContent";

function Navbar() {
  const [, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrollY for background transition
      setScrollY(currentScrollY);

      // Trigger isScrolled only when scroll > 50
      const scrolled = currentScrollY > 50;
      setIsScrolled(scrolled);

      // Only apply hide/show after scrolled past 50px
      if (scrolled) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // hide
        } else {
          setIsVisible(true); // show
        }

        // Reset visibility after user stops scrolling
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          setIsVisible(true);
        }, 500);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Opacity interpolation (0 scrollY = 0, >50 = 1)
  const bgOpacity = Math.min(scrollY / 150, 1); // value from 0 to 1
  const bgColor = `rgba(255, 255, 255, ${bgOpacity})`;

  return (
    <nav
      className={`fixed flex w-full justify-between items-center py-8 px-12 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: bgColor,
        backdropFilter: bgOpacity > 0 ? "saturate(180%) blur(10px)" : undefined,
        color: bgOpacity > 0.5 ? "#000" : "#fff",
        boxShadow: bgOpacity > 0.5 ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="brand text-2xl font-semibold">
        Belajar
        <span
          className={` ${bgOpacity > 0.5 ? "text-primary " : "text-white"}`}
        >
          Yuk!
        </span>
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-6">
          {["Kelas", "Benefit", "Harga", "Rating", "FAQ", "Tentang Kami"].map(
            (item) => (
              <li key={item} className="font-medium text-base">
                <a href="#">{item}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="cta flex items-center gap-4">
        <button
          className={`border-2 rounded-md py-2 px-6 ${
            bgOpacity > 0.5
              ? "text-black border-black"
              : "text-white border-white"
          }`}
        >
          Login
        </button>
        <button
          className={`rounded-md py-2 px-6 ${
            bgOpacity > 0.5 ? "text-white bg-black" : "text-primary bg-white"
          }`}
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
