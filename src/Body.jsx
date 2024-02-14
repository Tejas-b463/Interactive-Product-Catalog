import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductMenu from "./components/ProductMenu";
import Navbar from "./common/Navbar";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";

const Body = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:proId" element={<ProductMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
