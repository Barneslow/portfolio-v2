import OutlineButton from "../ui/buttons/OutlineButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import styles from "./Collab.module.css";
import LetsChat from "./LetsChat";
import SubHeading from "../ui/text/SubHeading";

const Collab = ({ setModalInView }) => {
  return (
    <section className={styles.content} id="contact">
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <SubHeading
            text={"Interested in collaborating with me?"}
            fontSize={40}
          />
          <p>
            I'm always open to discussing product design work or partnership
            opportunities.
          </p>
        </div>
        <OutlineButton
          className={styles.flex}
          onClick={() => setModalInView(true)}
        >
          Lets open a dialogue!
          <FontAwesomeIcon icon={faComments} style={{ fontSize: 30 }} />
        </OutlineButton>
      </div>
      <LetsChat />
    </section>
  );
};

export default Collab;
