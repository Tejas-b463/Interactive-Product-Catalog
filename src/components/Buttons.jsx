import React from "react";
import { motion } from "framer-motion";
import "../styles/Buttons.css";

const Buttons = ({ setFilteredData, ratingFiltered, filterItems, data }) => {
  return (
    <div className="btn-container">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        onClick={() => setFilteredData(data)}
      >
        All
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        onClick={ratingFiltered}
      >
        Rating 4.0+
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        onClick={() => filterItems("men's clothing")}
      >
        Mens
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        onClick={() => filterItems("women's clothing")}
      >
        Womens
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        onClick={() => filterItems("jewelery")}
      >
        Jewelry
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        onClick={() => filterItems("electronics")}
      >
        Electronics
      </motion.button>
    </div>
  );
};

export default Buttons;
