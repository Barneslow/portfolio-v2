import CustomSlider from "../ui/CustomSlider";
import styles from "./Collab.module.css";
import LetsChat from "./LetsChat";

const Collab = ({ open }) => {
  return (
    <section className={styles.content} id="contact">
      <CustomSlider slides={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <LetsChat open={open} />
    </section>
  );
};

export default Collab;
