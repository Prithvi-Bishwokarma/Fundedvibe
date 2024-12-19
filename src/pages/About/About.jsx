import React from "react";
import Banner from "../../components/Banner/Banner";
import LayoutAbout from "../../layouts/LayoutAbout";

const About = () => {
  return (
    <LayoutAbout>
        <Banner />
        <About />
    </LayoutAbout>
  );
};

export default About;
