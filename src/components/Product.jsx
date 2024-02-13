import React, { useEffect, useState } from "react";
import "../styles/Product.css";
import ProductList from "./ProductList";
import { Fetch_API } from "../utils/constant";

const Product = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(Fetch_API);
    const json = await response.json();
    console.log(json);
    setData(json);
    setFilteredData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (category) => {
    const filteredProducts = data.filter((item) => item.category === category);
    setFilteredData(filteredProducts);
  };

  const ratingFiltered = () => {
    const filteredProducts = data.filter((item) => item.rating.rate > 4);
    setFilteredData(filteredProducts);
  };

  return (
    <div>
      <button onClick={() => setFilteredData(data)}>All</button>
      <button onClick={ratingFiltered}>Rating 4.0+</button>
      <button onClick={() => filterItems("men's clothing")}>Mens</button>
      <button onClick={() => filterItems("women's clothing")}>Womens</button>
      <button onClick={() => filterItems("jewelery")}>Jewelry</button>
      <button onClick={() => filterItems("electronics")}>Electronics</button>
      <ProductList data={filteredData} />
    </div>
  );
};

export default Product;
