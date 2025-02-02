import { useContext, useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { DarkModeContext } from "./DarkModeProvider";
import { Link as ReactScrollLink } from "react-scroll";
import { sunIcon, moonIcon, logoDark, logoLight } from "../assets";

const Navbar = () => {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const _menuToggle = () => {
    document?.querySelector?.(".menu")?.classList?.toggle?.("active");
  };

  const isLight = theme === "light";
  const LOGO = isLight ? logoDark : logoLight;

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center justify-center py-5 fixed top-0 z-20 ${
        scrolled
          ? "bg-white bg-hero-gradient-light dark:bg-c-black dark:bg-hero-gradient-dark"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-[1340px] mx-auto">
        <ReactScrollLink
          spy
          hashSpy
          to={"home"}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
          onSetActive={setActive}
          className="flex items-center cursor-pointer"
        >
          <img src={LOGO} alt="logo" className="w-[70px] object-contain" />
        </ReactScrollLink>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => {
            const isActive = active === nav.id;
            return (
              <li
                key={nav.id}
                className={`${
                  isActive
                    ? "text-c-black dark:text-white"
                    : "text-gray-500 dark:text-gray-300"
                } hover:dark:text-white hover:text-c-black text-[18px] lg:text-base md:text-sm font-medium cursor-pointer`}
              >
                <ReactScrollLink
                  spy
                  hashSpy
                  to={nav?.id}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onSetActive={setActive}
                >
                  {nav?.title}
                </ReactScrollLink>
              </li>
            );
          })}
        </ul>
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {isLight ? <img src={sunIcon} /> : <img src={moonIcon} />}
        </div>

        <div className="menu cursor-pointer flex lg:hidden">
          <button
            className="nav-tgl"
            type="button"
            onClick={_menuToggle}
            aria-label="toggle menu"
          >
            <span aria-hidden="true" className=""></span>
          </button>
          <div className="nav">
            <ul>
              {navLinks?.map((nav) => {
                return (
                  <li id={nav?.id}>
                    <ReactScrollLink
                      to={nav?.id}
                      smooth={true}
                      offset={-100}
                      onClick={() => {
                        setActive(nav?.id);
                        _menuToggle();
                      }}
                    >
                      {nav?.title}
                    </ReactScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
