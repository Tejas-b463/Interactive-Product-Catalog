import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Product.css";
import { TiStar } from "react-icons/ti";

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
        <h4 className="item-title">{item.title}</h4>
        <div className="item-category">{item.category}</div>
        <div className="item-rate">
          <div className="pro-rating">
            {item.rating.rate}
            <TiStar style={{ marginLeft: "2px" }} />
          </div>
          <div>{item.rating.count} Ratings</div>
        </div>
        <div className="item-price">${item.price}</div>
      </div>
    </motion.div>
  );
};

export default ProductList;
