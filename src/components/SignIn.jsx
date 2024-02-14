import React, { useState, useRef } from "react";
import "../styles/SignIn.css";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      // sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <>
      <div className="form-group">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input type="text" placeholder="Name" required />}
          <input ref={email} type="text" placeholder="Email" />

          <input ref={password} type="password" placeholder="Password" />
          <p style={{ color: "red" }}>{errorMessage}</p>
          <button onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm}>
            {isSignIn
              ? "New User? Create Account"
              : " Already a Customer? Login"}
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
