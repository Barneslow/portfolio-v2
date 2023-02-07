import TypeWriter from "@/components/animations/typewriter";
import EmailForm from "@/components/Email/EmailForm";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import { Roboto_Condensed } from "@next/font/google";

import styles from "./email.module.css";

const robotoC = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
});

const EmailPage = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    <Layout>
      <div className={styles.container}>
        <TypeWriter
          text={"Have a Project? Tell me more!"}
          className={styles.header}
        />
        <EmailForm />
      </div>
    </Layout>
    // </motion.div>
  );
};
export default EmailPage;
