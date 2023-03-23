import {
  faGraduationCap,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SkillsCard.module.css";
import TechStack from "./TechStack";
import classes from "./Stacks.module.css";
import SlidingCard from "../ui/SlidingCard";

const stack = ["react", "nextjs", "nodejs", "express", "mongodb"];
const stack2 = ["react", "vitejs", "firebase"];
const stack3 = ["react-native", "airtable", "firebase"];
const stack4 = [
  "html",
  "css",
  "javascript",
  "react",
  "react-native",
  "nodejs",
  "nextjs",
  "mongodb",
  "sass",
];
const stack5 = ["typescript", "graphql", "python"];

export const StackAlpha = ({ color }) => {
  return (
    <div className={styles.card} style={{ borderTop: `10px solid ${color}` }}>
      <FontAwesomeIcon
        icon={faLayerGroup}
        className={styles.icon}
        style={{ background: "var(--gold)" }}
      />
      <div style={{ width: "100%" }}>
        <h3 className={styles.title}>My Stack</h3>
        <div className={classes.container}>
          <div className={classes.block}>
            <h5 className={styles.heading}>Favourite</h5>
            <TechStack stack={stack} />
          </div>
          <div className={classes.block}>
            <h5 className={styles.heading}>Quick</h5>
            <TechStack stack={stack2} />
          </div>
          <div className={classes.block}>
            <h5 className={styles.heading}>Mobile</h5>
            <TechStack stack={stack3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackBeta = ({ color }) => {
  return (
    <div className={styles.card} style={{ borderTop: `10px solid ${color}` }}>
      <FontAwesomeIcon
        icon={faGraduationCap}
        className={styles.icon}
        style={{ background: "var(--orange)" }}
      />
      <div style={{ width: "100%" }}>
        <h3 className={styles.title}>My Skills</h3>
        <div className={classes.container}>
          <div className={classes.block}>
            <h5 className={styles.heading}>Proficient</h5>
            <TechStack
              stack={stack4}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
            />
          </div>
          <div className={classes.block}>
            <h5 className={styles.heading}>Learning</h5>
            <TechStack stack={stack5} />
          </div>
        </div>
      </div>
    </div>
  );
};
const Stacks = () => {
  return (
    <>
      <StackAlpha />
      <StackBeta />
    </>
  );
};

export default Stacks;
