import Typewriter from "typewriter-effect";
import AboutBg from "./canvas/AboutBg";
import { Bio } from "../constants/dataGen";
import { avatar } from "../assets";
import "../styles/About.scss";

function About() {
  return (
    <div className="heroContainer">
      <div className="aboutBg">
        <AboutBg />
      </div>

      <div className="heroInnerContainer">
        <div className="heroLeftContainer">
          <h1 className="title-ctn">
            Bonjour, je me présente
            <br />
            {Bio.name}
          </h1>
          <div className="textLoop">
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
          <div className="subTitle">{Bio.description}</div>
          <a
            className="resumeButton"
            href={Bio.resume}
            target="_blank"
            rel="noreferrer"
          >
            Cv en ligne
          </a>
        </div>
        <div className="heroRightContainer">
          <img src={avatar} alt="avatar" className="img-ctn-about" />
        </div>
      </div>
    </div>
  );
}

export default About;
