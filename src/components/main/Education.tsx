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
            <div className="title-c">Education</div>
            <ul>
              <li>B-Tech in Computer Engineering</li>
              <li>HSC</li>
              <li>SSC</li>
            </ul>
          </div>

          <div className="years">
            <div className="title-c">Year of Passing</div>
            <ul>
              <li>2026</li>
              <li>2022</li>
              <li>2020</li>
            </ul>
          </div>

          <div className="institute">
            <div className="title-c">Institution</div>
            <ul>
              <li>MKSSS Cummins College of Engineering for Women, Pune</li>
              <li>G.D. Mali Higher Secondary College, Dhule</li>
              <li>S.T.T.K. Mahajan HighSchool, Deopur, Dhule</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
