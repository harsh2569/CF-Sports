import React from "react";
import { services } from "../../data/service";

import "./Services.scss";

const Services: React.FC = () => {
  return (
    <div className="mx pad" id="services">
      <div className="services">
        <div className="services_header mb-50">
          <h1 className="mb-20">Services We Offer </h1>
          <p>
          CF Sports Global Management offer a variety of services to our clients, below is a less than exhaustive selection
          </p>
        </div>
        <div className="services_content">
          <div className="card_wrapper">
            {services.map((service, index) => {
              return (
                <div key={index.toString()} className="service_card">
                  <img src={service.image} alt={service.title} />
                  <div>
                    <h3 className="mb-5">{service.title}</h3>
                    <p className="mb-25">{service.description}</p>
                    <span>Leare more</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
