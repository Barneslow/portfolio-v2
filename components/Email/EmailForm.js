import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import SendIcon from "@mui/icons-material/Send";

import { motion } from "framer-motion";

import styles from "./EmailForm.module.css";
import OutlineButton from "../ui/buttons/OutlineButton";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("A Valid Email is required"),
  subject: Yup.string()
    .min(10, "Too Short!")
    .max(40, "Too Long!")
    .required("Must have a subject"),
  message: Yup.string().min(75, "Too Short!").required("Write me a message :)"),
});

const EmailForm = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 2, type: "spring" }}
      className={styles.container}
    >
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: "", subject: "", message: "" }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
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
                email={true}
              />
            </div>

            <div className={styles.inputs}>
              <Field
                component={CustomInput}
                type="text"
                name="subject"
                placeholder="Subject"
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
              Send Mail <SendIcon />
            </OutlineButton>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default EmailForm;
