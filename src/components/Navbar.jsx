import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bio, navLinks } from "../constants/dataGen";
import { close, logoLight, menu } from "../assets";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Navbar.scss";

function Navbar() {
  const { toggleTheme, generateThemeClasses } = useTheme();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
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

  return (
    <nav className={`navbar ${generateThemeClasses()}`}>
      <div className="nav-ctn">
        <Link
          to="/"
          className="nav-link"
          onClick={() => {
            window.sco(0, 0);
          }}
        >
          <img src={logoLight} alt="logo" className="nav-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick} aria-hidden="true">
          <img src={click ? close : menu} alt={click ? close : menu} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`nav-item ${generateThemeClasses()}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <a
          className={`github-btn ${generateThemeClasses()}`}
          href={Bio.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
        <div className="theme-switch">
          <input type="checkbox" id="theme-checkbox" onClick={toggleTheme} />
          <label for="theme-checkbox">
            <div></div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
