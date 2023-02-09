import styles from "./Buttons.module.css";

const OutlineButton = ({ children, url, onClick, ...props }) => {
  const { disabled, type, className } = props;

  return (
    <button
      className={className || styles["button-outline"]}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
