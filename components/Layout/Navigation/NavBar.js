import styles from "./NavBar.module.css";
import { motion, useAnimation } from "framer-motion";
import Logo from "../Logo";
import { capitalizeFirstLetter } from "@/helpers/text";

const sections = ["about", "skills", "projects", "contact"];

const NavBar = ({ setModalInView }) => {
  return (
    <nav className={styles.nav}>
      <Logo
        color={"var(--purple)"}
        stroke={"var(--dark-purple)"}
        onClick={setModalInView}
      />
      <ol className={styles.navlist}>
        {sections.map((section, index) => (
          <motion.li
            key={index}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 * index }}
          >
            <a href={`/#${section}`}>{capitalizeFirstLetter(section)}</a>
          </motion.li>
        ))}
      </ol>
    </nav>
  );
};

export default NavBar;
