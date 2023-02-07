import { useInView } from "framer-motion";
import { useRef } from "react";

import styles from "./Description.module.css";

const Description = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const options = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 1s",
  };

  return (
    <section>
      <div className={styles.container} id="about">
        <h2 ref={ref} className={styles.title} style={options}>
          Hi, I'm Darrach, nice to meet you!
        </h2>
        <p className={styles.text} style={options}>
          Since beginning my journey as a freelance designer over 11 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time
        </p>
      </div>
    </section>
  );
};

export default Description;
