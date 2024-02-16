import React, { useState } from "react";
import "../styles/Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const productItem = useSelector((store) => store.products.items);
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
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar-bg">
      <div className="sb__navbar">
        <div className="sb__navbar-links">
          <div className="sb__navbar-links_logo">
            <Link to="/">
              {/* <img src={logo} alt="logo" /> */}
              <h1>Shoppi 🛍️</h1>
            </Link>
          </div>
          <div className="sb__navbar-links_container">
            <p>
              <Link to="/">Product</Link>
            </p>
            <p>
              <button onClick={handleSignOut}>
                {user ? "Sign Out" : "Sign In"}
              </button>
            </p>
            <p>
              <Link to="/cart">Cart {productItem.length}</Link>
            </p>
          </div>
        </div>
        {/* <div className="sb__navbar-button">
          <Link>
            <button type="button">Cart</button>
          </Link>
        </div> */}
        <div className="sb__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="sb__navbar-menu_container scale-up-center">
              <div className="sb__navbar-menu_container-links">
                <p>
                  <Link to="/">Product</Link>
                </p>
                <p>
                  <button onClick={handleSignOut}>
                    {user ? "Sign Out" : "Sign In"}
                  </button>
                </p>
                <p>
                  <Link to="/cart">Cart {productItem.length}</Link>
                </p>
              </div>
              {/* <div className="sb__navbar-menu_container-links-sign">
                <Link>
                  <button type="button">Cart</button>
                </Link>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
