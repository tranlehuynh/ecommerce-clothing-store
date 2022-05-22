import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../routes/Routes";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <Routes />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
