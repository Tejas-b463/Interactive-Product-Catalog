import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
