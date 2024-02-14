import React from "react";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
            <button onClick={handleSignOut}>
              {user ? "Sign Out" : "Sign In"}
            </button>
            <img src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
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
