import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
import { motion } from "framer-motion";
import "../styles/ProductDetails.css";
import { TiStar } from "react-icons/ti";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      className="product-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -150 }}
      transition={{ duration: 1 }}
    >
      <div className="proDetail-container">
        <img className="pro-img" src={product.image} alt={product.title} />
        <div className="pro-data">
          <div className="pro-category">{product.category}</div>
          <div className="pro-title">{product.title}</div>
          <div className="pro-rate">
            <div className="pro-rating">
              {product.rating.rate}
              <TiStar style={{ marginLeft: "2px" }} />
            </div>
            <div>{product.rating.count} Ratings</div>
          </div>
          <div className="pro-price">${product.price}</div>
          <div>
            <button className="addtobag" onClick={handleAddItem}>
              Add to Bag
            </button>
            <button className="wishlist">Save to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="about">
        <h1 className="heading-with-line">About {product.category}</h1>
        <div>{product.description}</div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
