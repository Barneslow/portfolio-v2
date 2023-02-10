import {
  faGraduationCap,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SkillsCard.module.css";
import TechStack from "./TechStack";
import classes from "./Stacks.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SlidingCard from "./SlidingCard";

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

const Stacks = () => {
  return (
    <>
      <SlidingCard color={"var(--gold)"} delay={0.2}>
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
      </SlidingCard>
      <SlidingCard color={"var(--purple)"} delay={0.4}>
        <FontAwesomeIcon
          icon={faGraduationCap}
          className={styles.icon}
          style={{ background: "var(--purple)" }}
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
      </SlidingCard>
    </>
  );
};

export default Stacks;
