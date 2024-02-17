import React from "react";
import "../styles/Empty.css";
import { Link } from "react-router-dom";
import EmptyImg from "../img/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="order-success">
      <img src={EmptyImg} alt="Order Success" />
      <div className="order-details">
        <h1>Your shopping cart is empty.</h1>
        <p>Please add something soon, carts have feelings too.</p>
        <Link onClick={() => window.scrollTo(0, 0)} to="/" className="form-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
