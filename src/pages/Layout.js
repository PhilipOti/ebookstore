import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="main_section mt-5">{children}</div>

      <Footer></Footer>
    </div>
  );
}

export default Layout;
