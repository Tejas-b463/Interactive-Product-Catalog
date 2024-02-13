import React, { useEffect, useState } from "react";
import "../styles/Product.css";

const Product = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/");
    const json = await data.json();
    // console.log(json);
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-container">
      {data.map((item) => (
        <div key={item.id} className="product normal">
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
        </div>
      ))}
    </div>
  );
};

export default Product;
