import React from "react";
import "../styles/Form.css";

const CustomInfo = () => {
  return (
    <div className="stepper-group">
      <form>
        <h1>Contact Info</h1>
        <div className="stepper-container">
          <div className="stepper-form">
            <input type="text" placeholder="Name" required />
          </div>

          <div className="stepper-form">
            <input type="text" placeholder="Email" />
          </div>
          <div className="stepper-form">
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomInfo;
