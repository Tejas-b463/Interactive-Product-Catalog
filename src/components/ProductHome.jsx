import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Fetch_API } from "../utils/constant";
import Buttons from "./Buttons";
import Shimmer from "../page/Shimmer";
import { Link } from "react-router-dom";
import "../styles/Product.css";
import { motion, AnimatePresence } from "framer-motion";

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
    const filteredItems = filteredData
      .filter((item) => item.id >= 6)
      .slice(0, 6);
    return (
      <div>
        <Buttons
          setFilteredData={setFilteredData}
          ratingFiltered={ratingFiltered}
          filterItems={filterItems}
          data={data}
        ></Buttons>
        <motion.div
          onClick={() => window.scrollTo(0, 0)}
          layout
          className="product-container"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link to={"/products/" + item.id}>
                  <ProductList item={item} />
                </Link>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="product-btn">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/products"
            className="form-btn producthome-btn"
          >
            Load More
          </Link>
        </div>
      </div>
    );
  }
};

export default Product;
