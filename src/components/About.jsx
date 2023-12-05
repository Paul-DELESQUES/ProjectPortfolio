import Typewriter from "typewriter-effect";
import AboutBg from "./canvas/AboutBg";
import { Bio } from "../constants/dataGen";
import { avatar } from "../assets";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/About.scss";
import "../styles/AboutCanvas.scss";

function About() {
  const { generateThemeClasses } = useTheme();

  return (
    <div className={`heroContainer ${generateThemeClasses()}`}>
      <div className="aboutBg">
        <AboutBg />
      </div>

      <div className="heroInnerContainer">
        <div className="heroLeftContainer">
          <h1 className={`title-ctn ${generateThemeClasses()}`}>
            Bonjour, je me présente
            <br />
            {Bio.name}
          </h1>
          <div className={`textLoop ${generateThemeClasses()}`}>
            <span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className={`subTitle ${generateThemeClasses()}`}>
            {Bio.description}
          </div>
          <a
            className={`resumeButton ${generateThemeClasses()}`}
            href={Bio.resume}
            target="_blank"
            rel="noreferrer"
          >
            Cv en ligne
          </a>
        </div>
        <div className={`heroRightContainer ${generateThemeClasses()}`}>
          <img src={avatar} alt="avatar" className="img-ctn-about" />
        </div>
      </div>
    </div>
  );
}

export default About;
