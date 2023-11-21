import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/dataGen";
import { fadeIn, textVariant } from "../utils/motion";
import "../styles/Projects.scss";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="tilt-ctn">
        <div className="card-ctn">
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
        <div className="card-4">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className="card-5">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="proj-ctn-global" id="projects">
      <motion.div variants={textVariant()}>
        <p className="cards-ctn-title">My work</p>
        <h2 className="cards-ctn-title2">Projets.</h2>
      </motion.div>

      <div className="cards-ctn">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="cards-motion-p">
          Les projets suivants mettent en avant mes compétences à travers des
          exemples concrets. Chaque projet est brièvement décrit avec des liens
          Github pour voir le code et les démonstrations en direct. Cela reflète
          ma capacité à résoudre des problèmes, à travailler avec différentes
          technologies et à gérer des projets.
        </motion.p>
      </div>

      <div className="card-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Projects, "projects");
