import React, { Fragment } from "react";
import NavBar from "../Fragments/NavBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main className="container mx-auto mt-16 md:mt-0 p-4 md:px-32 z-0">
        {children}
      </main>
    </Fragment>
  );
};
export default Layout;
