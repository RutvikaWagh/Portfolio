import React from "react";

import About from "./About";
import Certifications from "./Certifications";
import ContactMe from "./ContactMe";
import Education from "./Education";
import MyInfo from "./MyInfo";
import Projects from "./Projects";

const Main: React.FC = () => {
  return (
    <main className="max-width-900px margin-auto">
      <MyInfo />
      <About />
      <Projects />
      <Education />
      <Certifications />
      <ContactMe />
    </main>
  );
};

export default Main;
