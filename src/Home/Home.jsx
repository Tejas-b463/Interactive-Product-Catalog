import React from "react";
import Product from "../components/Product";
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
      <Product />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
