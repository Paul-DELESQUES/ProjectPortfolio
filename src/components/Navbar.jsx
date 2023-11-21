import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bio, navLinks } from "../constants/dataGen";
import { logo, menu, close } from "../assets";
import "../styles/Navbar.scss";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
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

  return (
    <nav className="navbar">
      <div className="nav-ctn">
        <Link
          to="/"
          className="nav-link"
          onClick={() => {
            window.sco(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="nav-logo" />
          &nbsp;
          <p> Portfolio</p>
        </Link>

        <div className="menu-icon" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : menu} alt="menu burger" />
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="nav-item"
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <a
          className="github-btn"
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
