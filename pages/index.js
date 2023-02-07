import Layout from "@/components/Layout/Layout";
import Collab from "../components/Collab/Collab";
import Description from "../components/Hero/Description";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import projectsData from "../data/project_data.json";
import StickySideBar from "@/components/Layout/Navigation/StickySocialBar";
import { useState } from "react";
import PopupModal from "@/components/ui/modal/PopupModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Home(props) {
  const [modalInView, setModalInView] = useState(false);

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 1 }}
    // >
    <Layout setModalInView={setModalInView}>
      {modalInView && (
        <AnimatePresence mode="wait">
          <motion.div
            key="test"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 1, scale: 0, y: -100 }}
            style={{
              minWidth: "50vw",
              minHeight: "50vh",
              background: "lightgrey",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            <PopupModal setModalInView={setModalInView} />
          </motion.div>
        </AnimatePresence>
      )}
      <Hero />
      <Description />
      <Skills />
      <Projects projectsData={props.projectsData} />
      <Collab setModalInView={setModalInView} />
      <StickySideBar />
    </Layout>
    // </motion.div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projectsData,
    },
  };
}
