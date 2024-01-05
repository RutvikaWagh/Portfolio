import React from "react";

import About from "./About";
import Certifications from "./Certifications";
import Education from "./Education";
import Projects from "./Projects";
import MyInfo from "./MyInfo";

const Main: React.FC = () => {
  return (
    <main className="max-width-900px margin-auto">
      <MyInfo />
      <About />
      <Projects />
      <Education />
      <Certifications />
    </main>
  );
};

export default Main;
