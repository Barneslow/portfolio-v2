import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Buttons.module.css";

const IconLink = ({ icon, className, linkClass, url, text }) => {
  return (
    <a target="_blank" className={linkClass} href={url}>
      <FontAwesomeIcon icon={icon} className={className} />
      <span className={styles["button-span-text"]}> {text}</span>
    </a>
  );
};

export default IconLink;
