import React from "react";

const MyInfo: React.FC = () => {
  return (
    <div>
      <div className="my-images">
        <img className="image" src="/Flower.png" alt="Flower" />
        <img className="Name-image" src="/name.png" alt="Rutvika Wagh" />
      </div>
      <h2 className="qualities">
        Analytical, Problem-Solver, and Tech-Enthusiast.
      </h2>
      <a className="resume-button" target="_blank" href="Resume.pdf">
        view Resume
      </a>
    </div>
  );
};

export default MyInfo;
