import React from "react";

import "./ContactUs.scss";
import illustration from "../../assets/images/form_illustration.png";

const ContactUs: React.FC = () => {
  return (
    <div className="mx pad" id="contact">
      <div className="pad">
        <div className="contact">
          <div className="contact_container">
            <div className="contact_abstract">
              <img src={illustration} alt="illustration" />
            </div>
            <div className="contact_form">
              <h1 className="mb-50">Get Regular Updates from #CF</h1>
              <p className="mb-40">
              If you’re interested in having us represent you, please email us your footballing CV, If you don’t have one please complete the form below.{" "}
              </p>
              <div>
                <b>Subscribe to #CF</b>
                <input type="text" />
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
