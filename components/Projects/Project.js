import styles from "./Project.module.scss";
import image from "../../public/images/barneslowProductivity.png";
import OutLineLink from "../ui/buttons/OutlineLink";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Project = ({ project, index, inView }) => {
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.75,
          delay: index * 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView]);

  return (
    <motion.div className={`${styles.container}`} animate={animation}>
      <div className={styles.root}>
        <Image
          alt="dummy text"
          className={styles.image}
          src={`/images/${project.image}`}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className={styles.overlay}>
          <div className={styles["text-container"]}>
            <p className={styles.text}>{project.description}</p>
            <OutLineLink url={`/projects/${project.id}`}>See More</OutLineLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
