import React from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import "../styles/Home.css";
import PaymentImg from "../img/payment-img.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link to="/" className="logo">
              {/* <img src="" alt="Casmart logo" /> */}
              <h1>Shoppi</h1>
            </Link>

            <p className="footer-text">
              Casmart is Link fashion theme for presents Link complete wardrobe
              of uniquely crafted Ethnic Wear, Casuals, Edgy Denims, &
              Accessories inspired from the most contemporary
            </p>

            <ul className="social-list">
              <li>
                <Link to="/" className="social-link">
                  <IonIcon name="logo-facebook"></IonIcon>
                </Link>
              </li>

              <li>
                <Link to="/" className="social-link">
                  <IonIcon name="logo-twitter"></IonIcon>
                </Link>
              </li>

              <li>
                <Link to="/" className="social-link">
                  <IonIcon name="logo-instagram"></IonIcon>
                </Link>
              </li>

              <li>
                <Link to="/" className="social-link">
                  <IonIcon name="logo-pinterest"></IonIcon>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Information</p>
            </li>

            <li>
              <Link to="/" className="footer-link">
                About Company
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Payment Type
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Awards Winning
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                World Media Partner
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Become an Agent
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Refund Policy
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Category</p>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Handbags & Wallets
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Women's Clothing
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Plus Sizes
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Complete Your Look
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Baby Corner
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Man & Woman Shoe
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Help & Support</p>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Dealers & Agents
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                FAQ Information
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Return Policy
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Shipping & Delivery
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Order Tranking
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                List of Shops
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <Link to="/">codewithsadee</Link>. All Rights Reserved
          </p>

          <ul className="footer-bottom-list">
            <li>
              <Link to="/" className="footer-bottom-link">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-bottom-link">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-bottom-link">
                Sitemap
              </Link>
            </li>
          </ul>

          <div className="payment">
            <p className="payment-title">We Support</p>

            <img
              src={PaymentImg}
              alt="Online payment logos"
              className="payment-img"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
