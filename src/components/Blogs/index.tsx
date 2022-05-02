import React from "react";

import "./Blogs.scss";
import right_arrow from "../../assets/icons/right_arrow.svg";

const Blogs: React.FC = () => {
  return (
    <div className="blogs" id="blog">
      <div className="mx pad">
        <div className="blogs_container">
          <div className="blogs_content">
            <h1 className="mb-10">Blogs</h1>
            <p className="mb-40">
              Follow our official blog to get a small glimpse behind the scenes of one of the UKs best football agencies, we also have some opinion pieces dissecting transfers, decisions and opportunities.{" "}
            </p>
            <button className="btn btn-secondary">See All</button>
          </div>
          <div className="blogs_abstract">
            <div className="blog-card blog1">
              <div>
                <p>North Asia match</p>
                <img src={right_arrow} alt="arrow" />
              </div>
            </div>
            <div className="blog-card blog2">
              <div>
                <p>Hier steht eine Headline</p>
                <img src={right_arrow} alt="arrow" />
              </div>
            </div>
            <div className="blog-card blog3">
              <div>
                <p>South Africa match</p>
                <img src={right_arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
