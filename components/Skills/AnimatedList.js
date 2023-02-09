import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./AnimatedList.module.css";

const AnimatedList = ({ list }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.75 });

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const child = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }
  }, [animation, inView]);

  return (
    <motion.ul
      ref={ref}
      animate={animation}
      className={styles.list}
      variants={container}
      initial="initial"
    >
      {list.map((tool, index) => (
        <motion.li key={index} className={styles.item} variants={child}>
          {tool}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedList;
