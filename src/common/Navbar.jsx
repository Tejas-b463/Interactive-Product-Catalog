import React from "react";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const productItem = useSelector((store) => store.products.items);
  return (
    <nav>
      <div>
        <Link to="/">Product Catalog</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
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
