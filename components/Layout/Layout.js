import Footer from "./Footer/Footer";
import NavBar from "./Navigation/NavBar";

const Layout = ({ children, open }) => {
  return (
    <>
      <NavBar open={open} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
