import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
};

export default MyRoutes;
