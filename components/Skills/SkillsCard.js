import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedList from "../ui/AnimatedList";
import styles from "./SkillsCard.module.css";
import SlidingCard from "../ui/SlidingCard";

const SkillsCard = ({ options, delay, icon, color }) => {
  return (
    // <SlidingCard delay={delay} color={color}>
    <div className={styles.card} style={{ borderTop: `10px solid ${color}` }}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        style={{ background: color }}
      />

      <h1 className={styles.title}>{options.title}</h1>
      <div className={styles["text-container"]}>
        <p className={styles.text}>{options.description}</p>
      </div>
      <h2 className={styles.heading}>{options.heading}</h2>
      <p className={styles.text}>{options.list}</p>
      <h2 className={styles.heading}>Tools Used</h2>
      <AnimatedList list={options.tools} />
    </div>
    // </SlidingCard>
  );
};

export default SkillsCard;
