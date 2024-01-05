import React from "react";

import AboutMe from "./AboutMe";
const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="my-pic">
        <img src="/Photo.jpeg" width={50} alt="Profile Photo" />
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
    </section>
  );
};

export default About;
