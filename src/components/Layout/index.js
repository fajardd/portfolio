import React, { Fragment } from "react";
import NavBar from "../Fragments/NavBar";
import Footer from "../Fragments/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main className="container mx-auto mt-16 px-4 lg:px-24   z-0">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
