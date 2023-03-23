import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SkillsCard from "./SkillsCard";
import {
  faPaintBrush,
  faCode,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { StackAlpha, StackBeta } from "./Stacks";

import styles from "./SkillsBox.module.css";

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
  <StackBeta color="var(--orange)" />,
  <StackAlpha color="var(--gold)" />,
];

const SkillsBox = () => {
  const [count, setCount] = useState(0);

  let content = DUMMY_DATA[count];
  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <button
          className={count === 0 && styles.active}
          style={{
            background: count === 0 && "var(--green)",
          }}
          onClick={() => setCount(0)}
        >
          Designer
        </button>
        <button
          className={count === 1 && styles.active}
          style={{
            background: count === 1 && "var(--blue)",
          }}
          onClick={() => setCount(1)}
        >
          Developer
        </button>
        <button
          className={count === 2 && styles.active}
          style={{
            background: count === 2 && "var(--red)",
          }}
          onClick={() => setCount(2)}
        >
          Marketer
        </button>
        <button
          className={count === 3 && styles.active}
          style={{
            background: count === 3 && "var(--orange)",
          }}
          onClick={() => setCount(3)}
        >
          Languages
        </button>
        <button
          className={count === 4 && styles.active}
          style={{
            background: count === 4 && "var(--gold)",
          }}
          onClick={() => setCount(4)}
        >
          Stack
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillsBox;
