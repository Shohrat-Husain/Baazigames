import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

function Layout({ children }) {
  return (
    <div>
    <Header/>
      {children}
    <Footer/>
    </div>
  );
}

export default Layout;
