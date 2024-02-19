import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => console.log(latest));
    return () => unsub();
  }, [scrollY]);
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="Navbar"
    >
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
        <Link>{user?.displayName}</Link>
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
    </motion.nav>
  );
};

export default Navbar;
