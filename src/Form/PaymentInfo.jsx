import React from "react";
import "../styles/Form.css";

const PaymentInfo = () => {
  return (
    <div className="stepper-group">
      <form>
        <h1>Payment</h1>
        <div className="stepper-container">
          <div className="stepper-form">
            <input type="text" placeholder="Credit Card Number" required />
          </div>
          <div className="stepper-form">
            <input type="text" placeholder="Expiry Date" />
          </div>
          <div className="stepper-form">
            <input type="text" placeholder="CVV" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
