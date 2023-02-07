import styles from "./CustomInput.module.css";
import EmailIcon from "@mui/icons-material/Email";
import TitleIcon from "@mui/icons-material/Title";

const CustomInput = ({
  field,
  onBlur, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];

  const { email } = props;

  return (
    <>
      <div
        className={
          hasError
            ? `${styles.error} ${styles["form-input"]}`
            : styles["form-input"]
        }
      >
        <span>{email ? <EmailIcon /> : <TitleIcon />}</span>
        <input type="text" {...field} {...props} />
      </div>
      {hasError && (
        <div className={styles["error-text"]}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomInput;
