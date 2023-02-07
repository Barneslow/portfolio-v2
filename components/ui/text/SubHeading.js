import styles from "./SubHeading.module.css";

const SubHeading = ({ text, fontSize }) => {
  return (
    <h2 className={styles.heading} style={{ fontSize }}>
      {text}
    </h2>
  );
};

export default SubHeading;
