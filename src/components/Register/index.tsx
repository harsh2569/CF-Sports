import React from "react";
import "./Register.scss";

const Register: React.FC = () => {
  return (
    <div className="mx" id="agency">
      <div className="register">
        <div className="register_content">
          <div>
            <h1 className="mb-10">Registered intermediaries</h1>
            <p className="mb-20">
              Our intermediaries are fully registered with the english FA this generally gives us rights to work in many nations freely and where we cannot we have contacts in place to act swiftly and legitimately as proxies.
            </p>
            <ul className="mb-40">
              <li>
              Peter Steven Brown, London based, patient, understanding. Peter is an extremely well connected agent with links to southern europe, portugal and west africa.
              </li>
              <li>Mathurin Humbo, French speaking, financially creative, family oriented. Mat is known for getting international deals over the line, they never come with homesickness.</li>
              <li>
              Simon Kadu, Europe based, highly experienced, media savvy, trustworthy. Simon has played key roles in huge deals and made some offers that players should not have refused and in time regretted.
              </li>
            </ul>
            <button className="btn btn-primary" style={{ width: "fit-content" }}>
              List now
            </button>
          </div>
        </div>
        <div className="register_abstract"></div>
      </div>
    </div>
  );
};

export default Register;
