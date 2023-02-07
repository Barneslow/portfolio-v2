import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Buttons.module.css";

const IconButton = ({ onClick, icon, className, buttonClass, text }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className={className} />
      <span className={styles["button-span-text"]}>{text}</span>
    </button>
  );
};

export default IconButton;
