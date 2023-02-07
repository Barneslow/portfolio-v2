import styles from "./Buttons.module.css";

const OutlineButton = ({ children, icon, color, url, onClick, ...props }) => {
  const { disabled, type, className } = props;

  return (
    <button
      className={`${styles["button-outline"]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
      <i className={`${icon} ${color}`}></i>
    </button>
  );
};

export default OutlineButton;
