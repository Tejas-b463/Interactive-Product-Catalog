import React from "react";
import Service1 from "../img/service-icon-1.svg";
import Service2 from "../img/service-icon-2.svg";
import Service3 from "../img/service-icon-3.svg";
import Service4 from "../img/service-icon-4.svg";

const Service = () => {
  return (
    <section className="service">
      <div className="container">
        <ul className="service-list">
          <li className="service-item">
            <div className="service-item-icon">
              <img src={Service1} alt="Service icon" />
            </div>

            <div className="service-content">
              <p className="service-item-title">Free Shipping</p>

              <p className="service-item-text">On All Order Over $599</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-item-icon">
              <img src={Service2} alt="Service icon" />
            </div>

            <div className="service-content">
              <p className="service-item-title">Easy Returns</p>

              <p className="service-item-text">30 Day Returns Policy</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-item-icon">
              <img src={Service3} alt="Service icon" />
            </div>

            <div className="service-content">
              <p className="service-item-title">Secure Payment</p>

              <p className="service-item-text">100% Secure Gaurantee</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-item-icon">
              <img src={Service4} alt="Service icon" />
            </div>

            <div className="service-content">
              <p className="service-item-title">Special Support</p>

              <p className="service-item-text">24/7 Dedicated Support</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
