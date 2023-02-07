import Link from "next/link";
import styles from "./Buttons.module.css";

const OutLineLink = ({ children, icon, color, className, url }) => {
  return (
    <Link className={`${styles["button-outline"]} ${className}`} href={url}>
      {children}
      <i className={`${icon} ${color}`}></i>
    </Link>
  );
};

export default OutLineLink;
