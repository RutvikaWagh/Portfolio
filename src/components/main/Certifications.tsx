import React from "react";

const Certificate: React.FC = () => {
  return (
    <section id="certificate">
      <div className="title">
        <h2>Certificates</h2>
      </div>

      <div className="temp">
        <table>
          <tr>
            <th>Sr No.</th>
            <th>Year of Achievement</th>
            <th>Issued By</th>
            <th>Certifications</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>2022</td>
            <td>Sololearn</td>
            <td>IIT Bombay-Certificate of Appriciation</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>2023</td>
            <td>Sololearn</td>
            <td>Introduction to Javascript</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>2023</td>
            <td>Sololearn</td>
            <td>Introduction to HTML</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>2023</td>
            <td>Sololearn</td>
            <td>Introduction to CSS</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>2023</td>
            <td>Sololearn</td>
            <td>Introduction to Python</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>2023</td>
            <td>Sololearn</td>
            <td>Introduction to Java</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Certificate;
