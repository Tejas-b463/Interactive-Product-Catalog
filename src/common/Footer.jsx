import React from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import "../styles/Home.css";
import PaymentImg from "../img/payment-img.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <Link to="/" class="logo">
              {/* <img src="" alt="Casmart logo" /> */}
              <h1>Shoppi</h1>
            </Link>

            <p class="footer-text">
              Casmart is Link fashion theme for presents Link complete wardrobe
              of uniquely crafted Ethnic Wear, Casuals, Edgy Denims, &
              Accessories inspired from the most contemporary
            </p>

            <ul class="social-list">
              <li>
                <Link to="/" class="social-link">
                  <IonIcon name="logo-facebook"></IonIcon>
                </Link>
              </li>

              <li>
                <Link to="/" class="social-link">
                  <IonIcon name="logo-twitter"></IonIcon>
                </Link>
              </li>

              <li>
                <Link to="/" class="social-link">
                  <IonIcon name="logo-instagram"></IonIcon>
                </Link>
              </li>

              <li>
                <Link to="/" class="social-link">
                  <IonIcon name="logo-pinterest"></IonIcon>
                </Link>
              </li>
            </ul>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Information</p>
            </li>

            <li>
              <Link to="/" class="footer-link">
                About Company
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Payment Type
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Awards Winning
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                World Media Partner
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Become an Agent
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Refund Policy
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Category</p>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Handbags & Wallets
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Women's Clothing
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Plus Sizes
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Complete Your Look
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Baby Corner
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Man & Woman Shoe
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Help & Support</p>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Dealers & Agents
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                FAQ Information
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Return Policy
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Shipping & Delivery
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                Order Tranking
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-link">
                List of Shops
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2022 <Link to="/">codewithsadee</Link>. All Rights Reserved
          </p>

          <ul class="footer-bottom-list">
            <li>
              <Link to="/" class="footer-bottom-link">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-bottom-link">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link to="/" class="footer-bottom-link">
                Sitemap
              </Link>
            </li>
          </ul>

          <div class="payment">
            <p class="payment-title">We Support</p>

            <img
              src={PaymentImg}
              alt="Online payment logos"
              class="payment-img"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
