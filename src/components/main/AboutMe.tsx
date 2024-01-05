import React from "react";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const title = "About Me";
const description =
  "I am a passionate individual dedicated to learning and mastering the intricacies of coding. Always eager to embrace new challenges, I find joy in problem-solving and the creative process that comes with it.";
const hobbies = [
  "Coding",
  "Exploring new technologies",
  "Problem-solving",
  "Painting",
];
const email = "mailto:rutvikawagh@gmail.com";
const linkedin = "https://www.linkedin.com/in/rutvika-wagh-75244a283/";
const github = "https://github.com/RutvikaWagh";

const AboutMe: React.FC = () => {
  return (
    <div>
      <div className="flower-image">
        <img src="/flower2.png" alt="Flower" />
      </div>

      <div className="aboutme">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="title">
          <h2>Hobbies</h2>
        </div>
        <div className="description">
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="title">
          <h2>Contact Me</h2>
        </div>
        <div className="icons">
          <a href={email} target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} color="black" />
          </a>

          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} color="black" />
          </a>

          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
