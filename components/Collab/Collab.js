import styles from "./Collab.module.css";
import LetsChat from "./LetsChat";

const Collab = ({ open }) => {
  return (
    <section className={styles.content} id="contact">
      <LetsChat open={open} />
    </section>
  );
};

export default Collab;
