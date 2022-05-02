import React from "react";

import "./Footer.scss";
import logo from "../../assets/abstracts/logo.png";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import web from "../../assets/icons/web.svg";
import twitter from "../../assets/icons/twitter.svg";
import up_arrow from "../../assets/icons/up_arrow.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="mx pad">
        <div className="footer_container">
          <div className="block_left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="mb-24">
            CF Sports Global Management is a small, powerful and private players agency. We can get you to where you need to be. We simply love football, money comes a distant but important second.
            </p>
            <div className="social_links">
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={web} alt="web" />
              </a>
              <a href="/">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
          <nav className="footer_links">
            <section>
              {/* <h1>Quick Links</h1> */}
              
            </section>
            <section>
              <h1>Quick Links</h1>
              <ul>
               <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#blog">Blogs</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </section>
            <div className="nav_controls">
              <a href="#">
                <button
                  className="btn btn-primary"
                  style={{ padding: "8px 12px", borderRadius: "5px" }}
                >
                  <img src={up_arrow} alt="arrow" width={24} height={20} />
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <hr />
      <div className="mx pad">
        <div className="footer_policy">
          <p>©#CF2022. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
