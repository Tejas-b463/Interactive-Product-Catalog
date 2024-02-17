import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch_API } from "../utils/constant";
import ProductDetails from "./ProductDetails";
import Shimmer from "../page/Shimmer";

const ProductMenu = () => {
  const { proId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    const response = await fetch(Fetch_API + proId);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [proId]);

  return (
    <div style={{ marginTop: "30px" }}>
      {product ? <ProductDetails product={product} /> : <Shimmer />}
    </div>
  );
};

export default ProductMenu;
