import React from "react";
import ProductHome from "../components/ProductHome";
import Hero from "./Hero";
import Service from "./Service";
import Category from "./Category";
import Blog from "./Blog";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Category />
      <ProductHome />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
