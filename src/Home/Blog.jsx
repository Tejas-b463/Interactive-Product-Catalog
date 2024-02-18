import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../img/blog-1.jpg";
import Blog2 from "../img/blog-2.jpg";
import Blog3 from "../img/blog-3.jpg";
import IonIcon from "@reacticons/ionicons";

const Blog = () => {
  return (
    <section className="section blog">
      <div className="container">
        <h2 className="h2 section-title">Latest fashion news</h2>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Blog1}
                    alt="Worthy Cyber Monday Fashion From Casmart"
                    loading="lazy"
                    width="1020"
                    height="700"
                    className="w-100"
                  />
                </Link>
              </figure>

              <div className="card-content">
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <IonIcon name="folder-open-outline"></IonIcon>

                    <Link to="" className="card-meta-link">
                      Fashion
                    </Link>
                  </li>

                  <li className="card-meta-item">
                    <IonIcon name="time-outline"></IonIcon>

                    <Link to="" className="card-meta-link">
                      <time datetime="2021-03-31">31 Mar 2021</time>
                    </Link>
                  </li>
                </ul>

                <h3 className="h3 card-title">
                  <Link to="">Worthy Cyber Monday Fashion From Casmart</Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Blog2}
                    alt="Holiday Home Decoration I’ve Recently Ordered"
                    loading="lazy"
                    width="1020"
                    height="700"
                    className="w-100"
                  />
                </Link>
              </figure>

              <div className="card-content">
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <IonIcon name="folder-open-outline"></IonIcon>

                    <Link to="" className="card-meta-link">
                      Fashion
                    </Link>
                  </li>

                  <li className="card-meta-item">
                    <IonIcon name="time-outline"></IonIcon>

                    <Link to="" className="card-meta-link">
                      <time datetime="2021-03-31">31 Mar 2021</time>
                    </Link>
                  </li>
                </ul>

                <h3 className="h3 card-title">
                  <Link to="">
                    Holiday Home Decoration I’ve Recently Ordered
                  </Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Blog3}
                    alt="Unique Ideas for Fashion You Haven’t heard yet"
                    loading="lazy"
                    width="1020"
                    height="700"
                    className="w-100"
                  />
                </Link>
              </figure>

              <div className="card-content">
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <IonIcon name="folder-open-outline"></IonIcon>

                    <Link to="" className="card-meta-link">
                      Fashion
                    </Link>
                  </li>

                  <li className="card-meta-item">
                    <IonIcon name="time-outline"></IonIcon>

                    <Link to="" className="card-meta-link">
                      <time datetime="2021-03-31">31 Mar 2021</time>
                    </Link>
                  </li>
                </ul>

                <h3 className="h3 card-title">
                  <Link to="">
                    Unique Ideas for Fashion You Haven’t heard yet
                  </Link>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
