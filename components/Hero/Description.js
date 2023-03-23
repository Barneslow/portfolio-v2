import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import SlidingCard from "../ui/SlidingCard";
import Carousel from "../ui/Carousel";

import styles from "./Description.module.css";
import SkillsBox from "../Skills/SkillsBox";

const Description = () => {
  const [count, setCount] = useState(0);

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
    <section className={styles.container} id="about">
      {/* <Image
        src={`/images/${count}.jpg`}
        className={styles.image}
        width={1000}
        height={1000}
      /> */}
      <div style={{ flex: 1 }}>
        <h2 ref={ref} className={styles.title} style={options}>
          Hi, I&apos;m Darrach, nice to meet you!
        </h2>
        <p className={styles.text} style={options}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>

      <SlidingCard>
        {/* <Carousel count={count} setCount={setCount} /> */}
        <SkillsBox />
      </SlidingCard>
    </section>
  );
};

export default Description;
