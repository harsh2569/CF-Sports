import React from "react";

import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="mx">
      <div className="hero">
        <div className="pad">
          <h1 className="mb-5">Welcome to CF Global Sports Management.</h1>
          <p className="mb-50">Agents with a difference.
          </p>
          <button className="btn btn-primary"><a href="#contact">Contact Us</a></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
