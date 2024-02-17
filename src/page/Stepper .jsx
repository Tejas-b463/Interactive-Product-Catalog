import React from "react";
import CheckoutStepper from "./CheckoutStepper";
import "../styles/Stepper.css";
import CustomInfo from "../Form/CustomInfo";
import ShippingInfo from "../Form/ShippingInfo";
import PaymentInfo from "../Form/PaymentInfo";
import Delivered from "../Form/Delivered";

const CHECKOUT_STEPS = [
  {
    name: "Custom Info",
    Component: () => <CustomInfo />,
  },
  {
    name: "Shipping Information",
    Component: () => <ShippingInfo />,
  },
  {
    name: "Payment",
    Component: () => <PaymentInfo />,
  },
  {
    name: "Delivered",
    Component: () => <Delivered />,
  },
];

const Stepper = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default Stepper;
