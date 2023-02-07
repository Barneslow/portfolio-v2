import styles from "./Skills.module.css";
import BrushIcon from "@mui/icons-material/Brush";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PieChartIcon from "@mui/icons-material/PieChart";
import SkillsCard from "./SkillsCard";

const optionsArray = [
  {
    title: "Designer",
    description:
      "I value simple content structure, clean design patterns and thoughtful interactions",
    heading: "Things I enjoy designing",
    list: "UX, UI, Web, Apps, Logos",
    tools: [
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
    ],
  },
  {
    title: "Frontend Developer",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    heading: "Languages I speak:",
    list: "HTML, Pug, Slim, CSS, Sass, Git",
    tools: [
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
    ],
  },

  {
    title: "Designer",
    description:
      "I value simple content structure, clean design patterns and thoughtful interactions",
    heading: "Things I enjoy designing",
    list: "UX, UI, Web, Apps, Logos",
    tools: [
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
      "Affinity Designer",
    ],
  },
];

const Skills = () => {
  return (
    <section className={styles.content} id="skills">
      <div className={styles.container}>
        <SkillsCard options={optionsArray[0]} delay={0}>
          <BrushIcon
            sx={{
              fontSize: 70,
              backgroundColor: "var(--light-green)",
              borderRadius: "25%",
              padding: 1,
            }}
          />
        </SkillsCard>
        <SkillsCard options={optionsArray[1]} delay={0.5}>
          <ImportantDevicesIcon
            sx={{
              fontSize: 70,
              backgroundColor: "var(--light-green)",
              borderRadius: "25%",
              padding: 1.5,
            }}
          />
        </SkillsCard>
        <SkillsCard options={optionsArray[2]} delay={1}>
          <PieChartIcon
            sx={{
              fontSize: 70,
              backgroundColor: "var(--light-green)",
              borderRadius: "25%",
              padding: 1,
            }}
          />
        </SkillsCard>
      </div>
    </section>
  );
};

export default Skills;
