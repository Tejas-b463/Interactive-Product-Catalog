import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
import { motion } from "framer-motion";
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      className="proDetail-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -150 }}
      transition={{ duration: 1 }}
    >
      <img className="pro-img" src={product.image} alt={product.title} />
      <div className="pro-data">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <button onClick={handleAddItem}>Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
