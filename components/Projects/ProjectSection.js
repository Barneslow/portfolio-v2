import OutlineButton from "../ui/buttons/OutlineButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./ProjectSection.module.css";
import Projects from "./Projects";

const ProjectsSection = ({ projectsData, open }) => {
  return (
    <section className={styles.content} id="projects">
      {/* <div className={styles["heading-container"]}> */}
      <h2 className={styles.heading}>My Recent Work</h2>
      {/* <p className={styles.text}>
          Here are a few past design projects I have worked on. Want to see
          more?
          <button className={styles.link} onClick={open}>
            Email Me!
          </button>
        </p> */}
      {/* </div> */}
      <Projects projectsData={projectsData} />
      <OutlineButton className={styles.button}>
        Visit My GitHub!
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />
      </OutlineButton>
    </section>
  );
};

export default ProjectsSection;
