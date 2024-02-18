import React from "react";
import HeroBanner from "../img/hero-banner.jpg";
import "../styles/Home.css";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Fashion Everyday</p>

          <h2 className="h1 hero-title">Unrivalled Fashion House</h2>

          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
