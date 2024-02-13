import React from "react";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const productItem = useSelector((store) => store.products.items);
  return (
    <nav>
      <div>
        <h1>Product Catalog</h1>
      </div>
      <div>
        <ul>
          <li>
            <button to="/">Home</button>
          </li>
          <li>
            <Link to="/cart">Cart {productItem.length}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
