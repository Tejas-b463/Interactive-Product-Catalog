import React, { useState } from "react";
import "../styles/SignIn.css";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div className="form-group">
        <form action="">
          <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          <input type="text" placeholder="Username" />
          {!isSignIn && <input type="text" placeholder="Name" />}
          <input type="password" placeholder="Password" />
          <button>{isSignIn ? "Sign In" : "Sign Up"}</button>
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
