import React from "react";
import "../styles/Form.css";
import DeliveredImg from "../img/delivered.gif";

const Delivered = () => {
  return (
    <div className="delivered-container">
      <img src={DeliveredImg} alt="" />

      <h2>Your order has been Delivered ✅</h2>
    </div>
  );
};

export default Delivered;
