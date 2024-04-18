import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants/dataGen";
import { useTheme } from "../contexts/ThemeContext";
import { SectionWrapper } from "../hoc";
import "../styles/Projects.scss";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_deployment,
}) => {
  const { isDarkMode, generateThemeClasses } = useTheme();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`tilt-ctn ${generateThemeClasses()}`}
      >
        <div
          className="card-ctn"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img src={image} alt="project-image" className="img-card" />
          <div className="card-2">
            <div
              className="card-3"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="source code" className="img-card2" />
            </div>
          </div>
        </div>
        <div className={`card-4 ${generateThemeClasses()}`}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className={`card-5 ${generateThemeClasses()}`}>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

function Projects() {
  const { generateThemeClasses } = useTheme();

  return (
    <div className={`proj-ctn-global ${generateThemeClasses()}`} id="projects">
      <motion.div variants={textVariant()}>
        <h2 className={`cards-ctn-title ${generateThemeClasses()}`}>
          Projets.
        </h2>
      </motion.div>

      <div className="cards-ctn">
        <motion.p
          variants={fadeIn("right", "spring", 0.1, 1)}
          className={`cards-motion-p ${generateThemeClasses()}`}
        >
          Les projets suivants mettent en avant mes compétences à travers des
          exemples concrets. Chaque projet est brièvement décrit avec des liens
          Github pour avoir accès au code et des liens sur les images pour
          visualiser le déploiement. Cela reflète ma capacité à résoudre des
          problèmes, à travailler avec différentes technologies et à gérer des
          projets.
        </motion.p>
      </div>

      <div className="card-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  web_deployment: PropTypes.string.isRequired,
};

export default SectionWrapper(Projects, "projects");
