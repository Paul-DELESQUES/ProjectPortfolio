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
            <div className="skill" key={skill.title}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
