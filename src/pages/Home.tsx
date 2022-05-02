import React from "react";
import { About, Blogs, ContactUs, Register, Services } from "../components";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Blogs />
      <Register />
      <ContactUs />
    </div>
  );
};

export default Home;
