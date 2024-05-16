import React from "react";

const title = "About Me";
const description =
  "I am a passionate individual dedicated to learning and mastering the intricacies of coding. Always eager to embrace new challenges, I find joy in problem-solving and the creative process that comes with it.";
const hobbies = [
  "Coding",
  "Problem-solving and exploring new technologies",
  "Painting",
];
const interests = [
  "Backend Development",
  "Data Science and Machine Learning",
  "User Interface Development",
];

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
          <h2>Interests</h2>
        </div>
        <div className="description">
          <ul>
            {interests.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
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
      </div>
    </div>
  );
};

export default AboutMe;
