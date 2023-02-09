import styles from "./Project.module.scss";
import OutLineLink from "../ui/buttons/OutlineLink";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project, index, inView }) => {
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.25,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView, index, animation]);

  let color = "var(--blue)";

  if (index === 0) {
    color = "var(--gold)";
  }
  if (index === 1) {
    color = "var(--silver)";
  }

  if (index === 2) {
    color = "var(--bronze)";
  }

  return (
    <motion.div className={styles.container} animate={animation}>
      <FontAwesomeIcon
        icon={faMedal}
        className={styles.icon}
        style={{ color }}
      />
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
