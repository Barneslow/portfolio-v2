import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faAngleRight,
  faAngleLeft,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Carousel.module.css";
import SkillsCard from "../Skills/SkillsCard";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { StackAlpha, StackBeta } from "../Skills/Stacks";
import SlidingCard from "./SlidingCard";

const optionsArray = [
  {
    title: "Designer",
    description:
      "Minimalistic content structure with clean, colourful design patterns. Varied animations to a page to life!",
    heading: "Things I enjoy designing",
    list: "UX, UI, Web, Apps, Logos",
    tools: [
      "Figma",
      "Photoshop",
      "React-Native-Reanimated",
      "Framer Motion",
      "CSS / Sass / Tailwind",
    ],
  },
  {
    title: "Frontend Developer",
    description:
      "Writing elegant, legible and reusable code. Imagination and creation! Tackling problems and finding solutions!",
    // heading: "Learning",

    // list: "Typescript, GraphQL",
    tools: [
      "Javascript / HTML / CSS",
      "React / NextJS",
      "React-Native",
      "NodeJS",
      "MongoDB / Airtable / Firebase",
      "Pug",
    ],
  },

  {
    title: "Marketer",
    description:
      "Running million dollar social media campaigns. Designing, analysing and scaling across all major platforms.",
    heading: "Plaforms used",
    list: "Facebook, Snapchat, Tiktok, Twitter, Instagram",
    tools: [
      "Photoshop / PremierPro / Canva",
      "Unbounce / ClickFunnels",
      "Internal campaign managers",
      "Wordpress",
      "Voluum",
    ],
  },
];

const DUMMY_DATA = [
  <SkillsCard
    options={optionsArray[0]}
    delay={0}
    icon={faPaintBrush}
    color="var(--green)"
  />,
  <SkillsCard
    options={optionsArray[1]}
    delay={0}
    icon={faCode}
    color="var(--blue)"
  />,
  <SkillsCard
    options={optionsArray[2]}
    delay={0}
    icon={faChartSimple}
    color="var(--red)"
  />,
  <StackAlpha color="var(--gold)" />,
  <StackBeta color="var(--silver)" />,
];

const variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
    opacity: 0,
    scale: 0,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: ({ direction, width }) => ({
    x: direction * -width,
    opacity: 0,
    scale: 0,
  }),
};

const Carousel = ({ count, setCount }) => {
  const [data, setData] = useState(DUMMY_DATA);
  const [tuple, setTuple] = useState([null, count]);
  let [ref, { width }] = useMeasure();

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  let prev = tuple[0];

  let direction = count > prev ? 1 : -1;

  useEffect(() => {
    if (count === data.length) {
      const newData = [...data, ...data];
      setData(newData);
    }
  }, [count]);

  let content = data[count];

  return (
    <div className={styles.container}>
      {count === 0 ? (
        ""
      ) : (
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => setCount((prev) => prev - 1)}
          className={styles.arrow}
        />
      )}

      <div className={styles.viewbox} ref={ref}>
        <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={count}
            variants={variants}
            custom={{ direction, width }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className={styles.box}
            style={{ width }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
      {count < 4 && (
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => setCount((prev) => prev + 1)}
          className={`${styles.arrow} ${styles.right}`}
        />
      )}
    </div>
  );
};

export default Carousel;
