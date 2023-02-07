import Logo from "../Logo";
import styles from "./Footer.module.css";
import SocialsBar from "@/components/ui/buttons/SocialsBar";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        {/* <Logo color={"white"} stroke={"var(--dark-purple)"} size={30} /> */}
        <h2 className={styles.title}>
          Living, learning, & leveling up one day at a time.
        </h2>
      </div>
      <SocialsBar />
      <h2 className={styles.disclaimer}>Handcrafted by me! Vanilla CSS</h2>
    </footer>
  );
};

export default Footer;
