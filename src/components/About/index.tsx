import React from "react";

import "./About.scss";
import logo from "../../assets/abstracts/logo.png";

const About: React.FC = () => {
  return (
    <div className="mx pad" id="about">
      <div className="about">
        <div className="about_abstract">
          <img src={logo} alt="logo" />
        </div>
        <div className="about_content">
          <small className="mb-10">About us</small>
          <h1 className="mb-20">We are the best Football Agency</h1>
          <p className="mb-30">
          CF Global Sports Management is a focused and driven agency, we do not have a swarm of agents or more players than we can name. Our goal is to provide tailored solutions to our clients individual needs and be the most aggressive,pragmatic and effective representatives our clients could ever wish for. Our qualified player representatives have close bonds with our players so that they can understand the intricate and unique needs of both players and their families, it's never as simple as taking the highest offer or going where you’ll play and we work tirelessly to find the greatest results.
We have strong connections to sports media companies and European leagues. We also have very good connections to the fast growing leagues of the americas and the MLS.
We represent and provide services for players from academy levels all the way through to coaching after a man's playing career has been completed.
          </p>
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
