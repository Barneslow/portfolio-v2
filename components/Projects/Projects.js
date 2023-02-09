import Project from "./Project";
import styles from "./Projects.module.css";
import { useInView } from "react-intersection-observer";

const Projects = ({ projectsData }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main ref={ref} className={styles.container}>
      {projectsData.map((project, index) => (
        <Project
          project={project}
          index={index}
          inView={inView}
          key={project.id}
        />
      ))}
    </main>
  );
};

export default Projects;
