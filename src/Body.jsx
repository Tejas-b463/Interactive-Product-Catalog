import React from "react";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductMenu from "./components/ProductMenu";
import Navbar from "./common/Navbar";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import Breadcrumbs from "./page/Breadcrumbs";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:proId" element={<ProductMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
