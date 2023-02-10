import styles from "./Hero.module.css";
import avatar from "../../public/images/avatar.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0.75 } },
  };

  const child = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section className={styles.container}>
      <motion.div
        className={styles["text-container"]}
        initial="initial"
        animate="animate"
        variants={container}
      >
        <motion.h1 className={styles.header} variants={child}>
          Designer, Marketer & Frontend Developer
        </motion.h1>
        <motion.h2 className={styles.title} variants={child}>
          I love to design beautiful, user-friendly interfaces and code simple,
          helpful projects.
        </motion.h2>
        <motion.h3 className={styles.text} variants={child}>
          Aspiring developer hoping to make a positive impact on the world
        </motion.h3>
      </motion.div>
    </section>
  );
};

export default Hero;
