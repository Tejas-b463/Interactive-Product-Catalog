import React, { useEffect, useState } from "react";
import "../styles/Product.css";
import ProductList from "./ProductList";
import { Fetch_API } from "../utils/constant";
import Buttons from "./Buttons";
import Shimmer from "../page/Shimmer";

const Product = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = async () => {
    const response = await fetch(Fetch_API);
    const json = await response.json();
    console.log(json);
    setData(json);
    setFilteredData(json);
    setLoading(false);
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
  if (loading) {
    return <Shimmer />;
  } else {
    return (
      <div>
        <Buttons
          setFilteredData={setFilteredData}
          ratingFiltered={ratingFiltered}
          filterItems={filterItems}
          data={data}
        ></Buttons>
        <ProductList data={filteredData} />
      </div>
    );
  }
};

export default Product;
