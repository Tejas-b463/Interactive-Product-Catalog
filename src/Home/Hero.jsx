import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroBanner from "../img/hero-banner.jpg";
import "../styles/Home.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/products");
  };

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="hero-subtitle">Fashion Everyday</p>

          <h2 className="h1 hero-title">Unrivalled Fashion House</h2>

          <button onClick={handleButton} className="btn btn-primary">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
