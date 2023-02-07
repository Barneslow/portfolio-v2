import Footer from "./Footer/Footer";
import NavBar from "./Navigation/NavBar";

const Layout = ({ children, setModalInView }) => {
  return (
    <>
      <NavBar setModalInView={setModalInView} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
