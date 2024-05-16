import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <a href="https://github.com/RutvikaWagh/Portfolio">
          <div className="card">Personal Portfolio - ReactJs</div>
        </a>
        <a href="https://github.com/RutvikaWagh/Project">
          <div className="card">Java Cab Booking System</div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
