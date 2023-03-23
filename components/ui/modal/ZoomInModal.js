import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./PopupModal.module.css";

const zoomIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
      transformOrigin: "top",
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

const ZoomInModal = ({ modalOpen, close, item }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {modalOpen && (
        <Backdrop onClick={close}>
          <motion.div
            className={styles.modal}
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles["zoom-card"]}>
              <img src={`/images/cert${item}.jpg`} />
            </div>
            <FontAwesomeIcon
              icon={faClose}
              className={styles.close}
              onClick={close}
            />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default ZoomInModal;

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
