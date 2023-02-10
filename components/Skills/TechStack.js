import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import styles from "./Stacks.module.css";
import { capitalizeFirstLetter } from "@/helpers/text";

const TechStack = ({ stack, style }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const child = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
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
      className={styles.stack}
      variants={container}
      initial="initial"
      style={style}
    >
      {stack.map((item, index) => (
        <motion.li key={index} className={styles.icon} variants={child}>
          <Image
            src={`/images/icons/${item}.svg`}
            alt="random-text"
            width={40}
            height={40}
            className={styles.image}
          />
          <span className={styles.text}>{capitalizeFirstLetter(item)}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TechStack;
