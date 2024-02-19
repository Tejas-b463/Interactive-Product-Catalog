import React from "react";
import NewsletterImg from "../img/newsletter-bg.png";
import IonIcon from "@reacticons/ionicons";
import "../styles/Home.css";

const Newsletter = () => {
  return (
    <section className="section newsletter">
      <div className="container">
        <div
          className="newsletter-card"
          style={{ backgroundImage: `url(${NewsletterImg})` }}
        >
          <h2 className="card-title">Subscribe Newsletter</h2>

          <p className="card-text">
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>

          <form action="" className="card-form">
            <div className="input-wrapper">
              <input
                type="email"
                name="emal"
                placeholder="Enter your email"
                required
                className="input-field"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              <span>Subscribe</span>

              <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
