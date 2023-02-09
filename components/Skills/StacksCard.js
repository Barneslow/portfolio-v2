import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedList from "./AnimatedList";
import styles from "./SkillsCard.module.css";

const SkillsCard = ({ options, delay, icon, color }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, y: 125 });
    }
  }, [inView, animation, delay]);

  return (
    <motion.div
      className={styles.card}
      ref={ref}
      animate={animation}
      style={{ borderTop: `10px solid ${color}` }}
    >
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        style={{ background: color }}
      />

      <h1 className={styles.title}>{options.title}</h1>
      <div className={styles["text-container"]}>
        <p className={styles.text}>{options.description}</p>
      </div>
      <h2 className={styles.heading}>{options.heading}</h2>
      <p className={styles.text}>{options.list}</p>
      <h2 className={styles.heading}>Tools Used</h2>
      <AnimatedList list={options.tools} />
    </motion.div>
  );
};

export default SkillsCard;
