import styles from "./Skills.module.css";
import SkillsCard from "./SkillsCard";
import {
  faPaintBrush,
  faCode,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import Stacks from "./Stacks";

// learning new and improved ways of implenting programmatic code
const optionsArray = [
  {
    title: "Designer",
    description:
      "I love a simple, minimalistic content structure with clean and colourful design patterns. I value the use of layout and user input animations to bring life to a web page.",
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
      "My greatest joy is writing clean, elegant and legible code. I love refactoring so as to re-use code later projects. There is nothing more satisfying then figuring out the solution to a problem. (Before ChatGPT haha)!",
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
      "Multiple years of experience running social media campaigns in the millions of dollars. Experienced working as part of a team and individually.",
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

const Skills = () => {
  return (
    <section className={styles.content} id="skills">
      <div className={styles.container}>
        <SkillsCard
          options={optionsArray[0]}
          delay={0}
          icon={faPaintBrush}
          color="var(--green)"
        />
        <SkillsCard
          options={optionsArray[1]}
          delay={0.2}
          icon={faCode}
          color="var(--blue)"
        />

        <SkillsCard
          options={optionsArray[2]}
          delay={0.4}
          icon={faChartSimple}
          color="var(--red)"
        />
      </div>
      <div className={styles.container}>
        <Stacks />
      </div>
    </section>
  );
};

export default Skills;
