import styles from "./StickySocialBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StickySideBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon
            icon={faGithub}
            className={`${styles.icon} ${styles.github}`}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faFacebook}
            className={`${styles.icon} ${styles.facebook}`}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`${styles.icon} ${styles.linkedin}`}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${styles.icon} ${styles.envelope}`}
          />
        </li>
      </ul>
    </div>
  );
};

export default StickySideBar;
