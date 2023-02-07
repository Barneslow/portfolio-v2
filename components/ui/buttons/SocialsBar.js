import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./SocialsBar.module.css";

const SocialsBar = () => {
  return (
    <div className={styles.social}>
      <FontAwesomeIcon
        icon={faGithub}
        className={`${styles.icon} ${styles.github}`}
      />
      <FontAwesomeIcon
        icon={faFacebook}
        className={`${styles.icon} ${styles.facebook}`}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        className={`${styles.icon} ${styles.linkedin}`}
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        className={`${styles.icon} ${styles.envelope}`}
      />
    </div>
  );
};

export default SocialsBar;
