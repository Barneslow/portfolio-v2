import styles from "./NavBar.module.css";
import { motion } from "framer-motion";
import Logo from "../Logo";
import { capitalizeFirstLetter } from "@/helpers/text";
import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "contact"];

const NavBar = ({ open }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(sticky);

  return (
    <nav
      style={{
        width: "100%",
        position: sticky ? "sticky" : "inherit",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className={styles.nav}>
        <Logo
          color={"var(--purple)"}
          stroke={"var(--dark-purple)"}
          open={open}
        />
        <ol className={styles.navlist}>
          {sections.map((section, index) => (
            <motion.li
              key={index}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {section === "contact" ? (
                <a onClick={open}>{capitalizeFirstLetter(section)}</a>
              ) : (
                <a href={`/#${section}`}>{capitalizeFirstLetter(section)}</a>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default NavBar;
