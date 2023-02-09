import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./icons.module.css";

const Icons = ({ icons }) => {
  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.25, delayChildren: 1 } },
  };

  const child = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.25, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
      variants={container}
      initial="initial"
      animate="animate"
    >
      {icons.map((icon, index) => (
        <motion.div key={index} variants={child}>
          <Image
            className={styles.icon}
            src={`/images/icons/${icon.toLowerCase()}.svg`}
            alt="random-text"
            width={100}
            height={100}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Icons;
