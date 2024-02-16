import React, { useState, useRef, lazy } from "react";
import "../styles/SignIn.css";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const name = useRef(null);
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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
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
          navigate("/");
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
          <div className="form-container">
            {!isSignIn && (
              <div className="login-form">
                <input ref={name} type="text" placeholder="Name" required />
              </div>
            )}
            <div className="login-form">
              <input ref={email} type="text" placeholder="Email" />
            </div>
            <div className="login-form">
              <input ref={password} type="password" placeholder="Password" />
            </div>
            <p style={{ color: "red" }}>{errorMessage}</p>
            <button className="form-btn" onClick={handleButtonClick}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="login-text" onClick={toggleSignInForm}>
              {isSignIn
                ? "New User? Create Account"
                : "Already a Customer? Login"}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
