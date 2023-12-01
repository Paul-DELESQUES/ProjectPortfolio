import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { skills } from "../constants/dataGen";
import { useTheme } from "../contexts/ThemeContext";
import SectionWrapper from "../hoc/SectionWrapper";
import "../styles/Skills.scss";

const Skills = ({ index }) => {
  const { generateThemeClasses } = useTheme();

  return (
    <div className={`container ${generateThemeClasses()}`} id="skills">
      <div className="wrapper">
        <div className={`title ${generateThemeClasses()}`}>Skills</div>
        <div className={`desc ${generateThemeClasses()}`}>
          Voici les techs avec lesquelles je travaille :
        </div>

        <motion.div
          variants={fadeIn("right", "spring", index * 2, 2)}
          className="skills-container"
        >
          {skills.map((skill) => (
            <Tilt
              options={{ max: 45, scale: 1, speed: 450 }}
              className={`skill ${generateThemeClasses()}`}
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
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
