import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education">
      <div>
        <div className="title">
          <h2>Education</h2>
        </div>
        <div className="education">
        <table>
        <tr><th>Degree</th>
          <th>Year of Passing</th>
          <th>Institute Name</th>
          <th>Performance</th>
          </tr>
          <tr>
          <td>SSC</td>
          <td>2020</td>
          <td>S.T.T.K. Mahajan HighSchool</td>
            <td>95.60 %</td>
          </tr>
          <tr>
          <td>HSC</td>
          <td>2022</td>
          <td>G.D. Mali Secondary School</td>
          <td>83.83 %</td>
          </tr>
          <tr>
          <td>B-Tech (appear)</td>
          <td>2026</td>
          <td>MKSSS Cummins College of Engineering for women Pune</td>
          <td>FY - 8.3 %ile</td>
          </tr>
         </table>
      </div>
      </div>
    </section>
  );
};

export default Education;
