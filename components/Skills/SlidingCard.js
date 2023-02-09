import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./SlidingCard.module.css";

const SlidingCard = ({ children, delay, color }) => {
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
      {children}
    </motion.div>
  );
};

export default SlidingCard;
