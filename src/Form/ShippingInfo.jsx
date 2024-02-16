import React from "react";
import "../styles/Form.css";

const ShippingInfo = () => {
  return (
    <div className="stepper-group">
      <form>
        <h1>Shipping Info</h1>
        <div className="stepper-container">
          <div className="stepper-form">
            <input type="text" placeholder="Locality" required />
          </div>

          <div className="stepper-form">
            <input type="text" placeholder="Pincode" />
          </div>
          <div className="stepper-form">
            <input type="text" placeholder="Address" />
          </div>
          <div className="stepper-form">
            <input type="text" placeholder="City" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
