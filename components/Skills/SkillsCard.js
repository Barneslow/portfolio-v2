import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./SkillsCard.module.css";

const SkillsCard = ({ children, options, delay }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: -125,
        transition: {
          duration: 1,
          delay,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <motion.div className={styles.card} ref={ref} animate={animation}>
      {children}
      <h1 className={styles.title}>{options.title}</h1>
      <p className={styles.text}>{options.description}</p>
      <h2 className={styles.heading}>{options.heading}</h2>
      <p className={styles.text}>{options.list}</p>
      <h2 className={styles.heading}>Design Tools</h2>
      <ul className={styles.list}>
        {options.tools.map((tool, index) => (
          <li key={index} className={styles.item}>
            {tool}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillsCard;
