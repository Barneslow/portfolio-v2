import IconButton from "../ui/buttons/IconButton";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./LetsChat.module.css";

const LetsChat = ({ open }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
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
    <motion.div
      ref={ref}
      className={styles.content}
      variants={container}
      animate={animation}
      initial="initial"
    >
      <motion.div className={styles.block}>
        <h2 className={styles.title}>Start a project</h2>
      </motion.div>
      <motion.div className={styles.block}>
        <p className={styles.text}>
          Interested in working together? We should queue up a time to chat.
          I&apos;ll buy the coffee.
        </p>
      </motion.div>
      <motion.div className={styles.block}>
        <IconButton
          className={styles.icon}
          buttonClass={styles.button}
          icon={faComments}
          text="Lets Talk!"
          onClick={open}
          color="white"
        />
      </motion.div>
    </motion.div>
  );
};

export default LetsChat;
