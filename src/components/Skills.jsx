import { Tilt } from "react-tilt";
import { skills } from "../constants/dataGen";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <div className="wrapper">
        <div className="title">Skills</div>
        <div className="desc">
          Voici les techs avec lesquelles je travaille :
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <Tilt
              options={{ max: 45, scale: 1, speed: 450 }}
              className="skill"
              key={skill.title}
            >
              <div className="skill-title">{skill.title}</div>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.id}>
                    <img
                      className="skill-image"
                      src={item.icon}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
