import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Product.css";

const ProductList = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      key={item.id}
      className=""
    >
      <div className="product-header">
        <img src={item.image} alt="product" />
      </div>
      <div className="product-details">
        <h4 className="item-price">{item.title}</h4>
        <div className="product-item">
          <p className="item-price">${item.price}</p>
          <p className="item-price">{item.category}</p>
        </div>
      </div>
      <span>{item.rating.rate}</span>
    </motion.div>
  );
};

export default ProductList;
