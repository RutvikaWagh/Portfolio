import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education">
      <div>
        <div className="title">
          <h2>Education</h2>
        </div>
        <div className="education">
     
      <div className="course">
      <div className="title-c">Course Name</div>
      <ul>
        <li>SSC</li>
        <li>HSC</li>
        <li>B-Tech in Computer Engineering</li>
      </ul>
      </div>
     
      <div className="years">
      <div className="title-c">Year of Passing</div>
      <ul>
        <li>2020</li>
        <li>2022</li>
        <li>2026</li>
      </ul>
      </div>
     
      <div className="institute">
      <div className="title-c">Institution</div>
      <ul>
        <li>S.T.T.K. Mahajan HighSchool,Deopur Dhule</li>
        <li>G.D. Mali Higher Secondary College,Dhule</li>
        <li>MKSSS Cummins College of Engineering for women,Pune</li>
      </ul>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
