import styles from "./SkillsSection.module.css";
import SkillsCard from "./SkillsCard";
import {
  faPaintBrush,
  faCode,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { StackAlpha, StackBeta } from "./Stacks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SkillsBox from "./SkillsBox";

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

const SkillsSection = () => {
  return (
    <section className={styles.content} id="skills">
      <SkillsBox />
    </section>
  );
};

export default SkillsSection;
