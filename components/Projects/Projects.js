import OutlineButton from "../ui/buttons/OutlineButton";
import Project from "./Project";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import SubHeading from "../ui/text/SubHeading";

const Projects = (props) => {
  const { projectsData } = props;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`${styles.content}`} id="projects">
      <div className={styles["heading-container"]}>
        <SubHeading text={"My Recent Work"} />
        <p className={styles.text}>
          Here are a few past design projects I've worked on. Want to see more?
          <Link className={styles.link} href="/email">
            Email Me!
          </Link>
        </p>
      </div>
      <main ref={ref} className={styles.container}>
        {projectsData.map((project, index) => (
          <Project
            project={project}
            key={project.id}
            index={index}
            inView={inView}
          />
        ))}
      </main>
      <OutlineButton className={styles.flex}>
        Visit My GitHub!
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />
      </OutlineButton>
    </section>
  );
};

export default Projects;
