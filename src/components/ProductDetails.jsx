import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/productSlice";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={handleAddItem}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
