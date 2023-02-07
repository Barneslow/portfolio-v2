import TypeWriter from "@/components/animations/Typewriter";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faPlay,
  faFolderOpen,
  faEarth,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./projectId.module.scss";

import projectData from "../../data/project_data.json";
import { useRef, useState } from "react";
import IconLink from "@/components/ui/buttons/IconLink";
import IconButton from "@/components/ui/buttons/IconButton";
import Projects from "@/components/Projects/Projects";

const ProjectPage = ({ data, projectData }) => {
  const [moreProjectsView, setMoreProjectsView] = useState(false);
  const { name, description, url, image, video, text } = data;

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };

  function moreProjectsHandler() {
    setMoreProjectsView((prev) => !prev);
  }

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
            <Projects projectsData={projectData} />
            <button onClick={moreProjectsHandler}>click</button>
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
              <div style={{ flex: 1 }}>
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className={styles["video-container"]}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    alt="dummy text"
                    src={`/images/${image}`}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className={styles["overlay-image"]}
                  />

                  <FontAwesomeIcon
                    icon={faPlay}
                    className={styles["overlay-icon"]}
                  />
                  <video
                    ref={videoRef}
                    src={`/videos/${video}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "black",
                    }}
                    muted
                  />
                </motion.div>
              </div>
              <motion.div
                className={styles["text-container"]}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <h3 className={styles["sub-heading"]}>{description}</h3>
                <p className={styles.text}>{text}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    // height: 65,
                  }}
                >
                  <IconLink
                    linkClass={styles.link}
                    icon={faEarth}
                    url={url}
                    text={`Visit ${name} here!`}
                  />
                  <IconLink
                    linkClass={styles.link}
                    icon={faGithub}
                    url="https://github.com/Barneslow/tourist-traveller"
                    text="Source Code!"
                  />

                  {/* <a
                    className={styles.link}
                    style={{
                      fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
                      fontWeight: 900,
                    }}
                    href={url}
                  ></a> */}

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
