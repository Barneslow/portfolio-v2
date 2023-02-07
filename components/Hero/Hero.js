import styles from "./Hero.module.css";
import avatar from "../../public/images/avatar.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.5, delayChildren: 0.5 } },
  };

  const child = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1.25 } },
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
      <motion.div
        className={styles["image-container"]}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 2.5, type: "spring", bounce: 0.6 }}
      >
        <Image
          alt="dummy text"
          className={styles.image}
          src={avatar.src}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
