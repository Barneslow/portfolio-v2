import Layout from "@/components/Layout/Layout";
import Collab from "../components/Collab/Collab";
import Description from "../components/Hero/Description";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/SkillsSection";
import projectsData from "../data/project_data.json";
import StickySideBar from "@/components/Layout/Navigation/StickySocialBar";
import PopupModal from "@/components/ui/modal/PopupModal";
import ProjectsSection from "@/components/Projects/ProjectSection";

import useModal from "@/hooks/useModal";
import Carousel from "@/components/ui/Carousel";
import CustomSlider from "@/components/ui/CustomSlider";

export default function Home(props) {
  const { open, modalOpen, close } = useModal();

  return (
    <Layout open={open}>
      <Hero />
      <PopupModal modalOpen={modalOpen} close={close} />
      <Description />
      {/* <CustomSlider slides={[1, 2, 3, 4, 5, 6]} /> */}
      <ProjectsSection projectsData={props.projectsData} open={open} />
      <Collab open={open} />
      <StickySideBar />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projectsData,
    },
  };
}
