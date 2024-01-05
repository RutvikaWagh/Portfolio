import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certificate">Achievement & Certificates</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
