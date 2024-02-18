import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Category1 from "../img/category-1.jpg";
import Category2 from "../img/category-2.jpg";
import Category3 from "../img/category-3.jpg";
import Category4 from "../img/category-4.jpg";
import Category5 from "../img/category-5.jpg";
import Category6 from "../img/category-6.jpg";

const Category = () => {
  return (
    <section className="section category">
      <div className="container">
        <ul className="category-list">
          <li className="category-item">
            <figure className="category-banner">
              <img
                src={Category1}
                alt="Sunglass & eye"
                loading="lazy"
                width="510"
                height="600"
                className="w-100"
              />
            </figure>

            <Link href="#" className="btn btn-secondary">
              Sunglass & Eye
            </Link>
          </li>

          <li className="category-item">
            <figure className="category-banner">
              <img
                src={Category2}
                alt="Active & outdoor"
                loading="lazy"
                width="510"
                height="600"
                className="w-100"
              />
            </figure>

            <Link href="#" className="btn btn-secondary">
              Active & Outdoor
            </Link>
          </li>

          <li className="category-item">
            <figure className="category-banner">
              <img
                src={Category3}
                alt="Winter wear"
                loading="lazy"
                width="510"
                height="600"
                className="w-100"
              />
            </figure>

            <Link href="#" className="btn btn-secondary">
              Winter Wear
            </Link>
          </li>

          <li className="category-item">
            <figure className="category-banner">
              <img
                src={Category4}
                alt="Exclusive footwear"
                loading="lazy"
                width="510"
                height="600"
                className="w-100"
              />
            </figure>

            <Link href="#" className="btn btn-secondary">
              Exclusive Footwear
            </Link>
          </li>

          <li className="category-item">
            <figure className="category-banner">
              <img
                src={Category5}
                alt="Jewelry"
                loading="lazy"
                width="510"
                height="600"
                className="w-100"
              />
            </figure>

            <Link href="#" className="btn btn-secondary">
              Jewelry
            </Link>
          </li>

          <li className="category-item">
            <figure className="category-banner">
              <img
                src={Category6}
                alt="Sports cap"
                loading="lazy"
                width="510"
                height="600"
                className="w-100"
              />
            </figure>

            <Link href="#" className="btn btn-secondary">
              Sports Cap
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
