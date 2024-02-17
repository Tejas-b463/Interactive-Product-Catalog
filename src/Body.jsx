import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./page/Home";
import ProductMenu from "./components/ProductMenu";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import Breadcrumbs from "./page/Breadcrumbs";
import Stepper from "./page/Stepper ";
import Footer from "./common/Footer";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubscribe();
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
        <Route path="/stepper" element={<Stepper />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Body;
