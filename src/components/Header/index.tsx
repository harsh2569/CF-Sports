import React, { useEffect, useState } from "react";

import "./Header.scss";
import logo from "../../assets/abstracts/logo.png";
import menu from "../../assets/icons/menu.svg";

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const renderLinks = (
    <div className="nav_links" onClick={() => setSidebar(false)}>
      <a href="#">Home</a>
      <a href="#services">Services</a>
      <a href="#agency">Agency</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact Us</a>
    </div>
  );

  return (
    <div className="header">
      <div className="mx pad">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {renderLinks}
          <div className="menu">
            <img src={menu} alt="menu" onClick={() => setSidebar((s) => !s)} />
            <div className={sidebar ? "sidebar_links active" : "sidebar_links"}>{renderLinks}</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
