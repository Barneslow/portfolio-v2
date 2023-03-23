import TypeWriter from "@/components/animations/Typewriter";
import Layout from "@/components/Layout/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faFolderOpen,
  faFileLines,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./projectId.module.scss";

import projectData from "../../data/project_data.json";
import { useEffect, useState } from "react";
import IconLink from "@/components/ui/buttons/IconLink";
import IconButton from "@/components/ui/buttons/IconButton";
import Projects from "@/components/Projects/Projects";
import VideoBox from "@/components/video/VideoBox";
import { useRouter } from "next/router";
import Icons from "@/components/ui/icons";

const ProjectPage = ({ data, projectData }) => {
  const router = useRouter();

  const [moreProjectsView, setMoreProjectsView] = useState(false);
  const { name, description, url, image, video, text, github, build } = data;

  function moreProjectsHandler() {
    setMoreProjectsView((prev) => !prev);
  }

  useEffect(() => {
    if (moreProjectsView) {
      setMoreProjectsView(false);
    }
  }, [router.asPath]);

  const filteredProjects = projectData.filter(
    (project) => project.id !== router.query.projectId
  );

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {moreProjectsView ? (
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            exit={{ x: "100vw" }}
            className={styles.container}
            key="modal"
          >
            <IconButton
              icon={faArrowCircleLeft}
              text="Go Back"
              onClick={moreProjectsHandler}
              buttonClass={` ${styles.back} ${styles.link} `}
            />

            <Projects
              projectsData={filteredProjects}
              moreProjectsHandler={moreProjectsHandler}
            />
          </motion.div>
        ) : (
          <motion.div
            key="test"
            transition={{ duration: 0.5 }}
            exit={{ x: "-100vw" }}
            className={styles.container}
          >
            <div className={styles.header}>
              <TypeWriter className={styles.heading} text={`${name}`} />
            </div>

            <div className={styles["content-box"]}>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <VideoBox image={image} video={video} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <h3>Built With</h3>
                  <Icons icons={build} />
                </div>
              </div>
              <motion.div
                className={styles["text-container"]}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h3 className={styles["sub-heading"]}>{description}</h3>
                <p className={styles.text}>{text}</p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <IconLink
                    linkClass={styles.link}
                    icon={faFileLines}
                    url={url}
                    text={`Visit ${name} here!`}
                  />
                  <IconLink
                    linkClass={styles.link}
                    icon={faGithub}
                    url={github}
                    text="Source Code!"
                  />
                  <IconButton
                    buttonClass={styles.link}
                    icon={faFolderOpen}
                    text="More Projects"
                    onClick={moreProjectsHandler}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};
export default ProjectPage;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { projectId: "1" } },
      { params: { projectId: "2" } },
      { params: { projectId: "3" } },
      { params: { projectId: "4" } },
      { params: { projectId: "5" } },
      { params: { projectId: "6" } },
    ],
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;

  const data = projectData.find((project) => project.id === projectId);

  return {
    props: {
      data,
      projectData,
    },
  };
}
