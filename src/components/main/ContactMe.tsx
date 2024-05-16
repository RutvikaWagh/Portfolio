/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Contact Me
 */

import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const email = "mailto:rutvikawagh@gmail.com";
const linkedin = "https://www.linkedin.com/in/rutvika-wagh-75244a283/";
const github = "https://github.com/RutvikaWagh";

const ContactMe: React.FC = () => {
  return (
    <section id="contactme">
      <div>
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
    </section>
  );
};

export default ContactMe;
