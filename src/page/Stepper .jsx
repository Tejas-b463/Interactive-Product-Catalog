import React from "react";
import CheckoutStepper from "./CheckoutStepper";
import "../styles/Stepper.css";
const CHECKOUT_STEPS = [
  {
    name: "Custom Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shipping Information",
    Component: () => <div>Enter Your Shipping Address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];

const Stepper = () => {
  return (
    <div>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default Stepper;
