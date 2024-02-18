import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  const productItem = useSelector((store) => store.products.items);
  const wishlistItem = useSelector((store) => store.wishlists.items);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        navigate("/error");
      });
    window.scrollTo(0, 0);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link onClick={() => window.scrollTo(0, 0)} to="/" className="nav-logo">
        SHOPPI
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          Home
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} to="/products">
          Product
        </Link>
        <Link onClick={handleSignOut}>{user ? "Sign Out" : "Sign In"}</Link>
        <Link>
          {user?.displayName.toUpperCase()}
          {/* <img
            style={{ width: "20px", marginLeft: "10px" }}
            src={user?.photoURL}
            alt=""
          /> */}
        </Link>
        <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
          <AiOutlineShoppingCart />
          <span className="cart-item"> {productItem.length}</span>
        </Link>
        <Link to="/wishlist" onClick={() => window.scrollTo(0, 0)}>
          <GiSelfLove />
          <span className="cart-item" id="cart-change">
            {wishlistItem.length}
          </span>
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
