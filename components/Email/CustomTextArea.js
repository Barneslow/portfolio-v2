import styles from "./CustomInput.module.css";

const CustomTextArea = ({
  field,
  onBlur,
  form: { touched, errors },
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <>
      <div
        className={
          hasError
            ? `${styles.error} ${styles["form-input"]}`
            : styles["form-input"]
        }
      >
        <textarea
          type="text"
          {...field}
          {...props}
          placeholder={hasError && errors[field.name]}
        />
      </div>
      {hasError && (
        <div className={styles["error-text"]}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomTextArea;
