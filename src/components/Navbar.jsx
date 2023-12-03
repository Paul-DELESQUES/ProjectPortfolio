import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bio, navLinks } from "../constants/dataGen";
import { logoLight, menu, close } from "../assets";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { generateThemeClasses } = useTheme();

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

        <div className="menu-icon" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : menu} alt="menu burger" />
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`nav-item ${generateThemeClasses()}`}
              onClick={() => setActive(nav.title)}
            >
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
      </div>
    </nav>
  );
}

export default Navbar;
