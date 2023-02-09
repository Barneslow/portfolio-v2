import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./VideoBox.module.scss";

const VideoBox = ({ image, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={styles["video-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        alt="dummy text"
        src={`/images/${image}`}
        width="0"
        height="0"
        sizes="100vw"
        className={styles["overlay-image"]}
      />

      <FontAwesomeIcon icon={faPlay} className={styles["overlay-icon"]} />
      <video
        ref={videoRef}
        src={`/videos/${video}`}
        style={{
          width: "100%",
          height: "100%",
          background: "black",
        }}
        muted
      />
    </motion.div>
  );
};

export default VideoBox;
