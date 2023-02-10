import Link from "next/link";
import styles from "./Buttons.module.css";

const OutLineLink = ({ children, className, url }) => {
  return (
    <Link className={className || styles["button-outline"]} href={url}>
      {children}
    </Link>
  );
};

export default OutLineLink;
