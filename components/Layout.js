import { useState } from "react";
import Sticky from "react-stickynode";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <Sticky innerZ={1001} top={0} onStateChange={handleChange}>
        <Header isSticky={isSticky} />
      </Sticky>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
