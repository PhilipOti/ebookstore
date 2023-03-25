import React from "react";
import Header from "../components/header/header";


function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="main_section mt-5">{children}</div>
    </div>
  );
}

export default Layout;
