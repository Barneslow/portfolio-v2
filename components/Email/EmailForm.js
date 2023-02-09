import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

import styles from "./EmailForm.module.css";
import OutlineButton from "../ui/buttons/OutlineButton";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("A Valid Email is required"),
  subject: Yup.string()
    .min(10, "Too Short!")
    .max(40, "Too Long!")
    .required("Must have a subject"),
  message: Yup.string().min(20, "Too Short!").required("Write me a message :)"),
});

const EmailForm = ({ close }) => {
  const [sentStatus, setSentStatus] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Have a Query?</h1>
      <Formik
        initialValues={{ email: "", subject: "", message: "" }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setSentStatus(true);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.inputs}>
              <Field
                component={CustomInput}
                type="email"
                name="email"
                placeholder="Email"
                icon={faEnvelope}
              />
            </div>

            <div className={styles.inputs}>
              <Field
                component={CustomInput}
                type="text"
                name="subject"
                placeholder="Subject"
                icon={faPen}
              />
            </div>

            <div className={styles.inputs}>
              <Field component={CustomTextArea} type="text" name="message" />
            </div>

            <OutlineButton
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              {sentStatus ? "Sending..." : "Send Mail"}
              {sentStatus ? <CheckIcon close={close} /> : <SendIcon />}
            </OutlineButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailForm;

function CheckIcon({ close }) {
  return (
    <motion.div
      animate={{
        borderColor: "white",
        backgroundColor: "var(--blue)",
      }}
      transition={{ duration: 1 }}
      onAnimationComplete={close}
      style={{
        borderRadius: "50%",
        height: 30,
        border: "3px solid var(--blue)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="30px"
        height="30px"
        stroke="white"
        strokeWidth={3}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeOut",
            delay: 0.5,
          }}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </motion.div>
  );
}
