import React from "react";
import "./page_styles/About.css";

const About_Page = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img
          src="https://cdn.uskudar.edu.tr/uploads/images/2020/08/13/800/tip-fakultesi-2.JPG" // Add your university image URL here
          alt="University photo"
          className="uni-image"
        />
      </div>

      <div className="about-content">
        <h1>About Uskudar University</h1>
        <p>
          Uskudar University is a premier educational institution located in the
          vibrant city of Istanbul. Established with the goal of fostering
          academic excellence, the university offers a diverse range of programs
          across various disciplines, including engineering, health sciences,
          social sciences, and humanities.
        </p>
        <p>
          Our dedicated faculty members are committed to providing an innovative
          learning environment that encourages students to think critically and
          creatively. We strive to equip our students with the necessary skills
          to excel in their chosen fields and to contribute positively to
          society.
        </p>
        <p>
          At Uskudar University, we believe in the power of research and
          collaboration. Our state-of-the-art facilities and resources enable
          students to engage in groundbreaking research projects that address
          real-world challenges. Our mission is to produce graduates who are not
          only knowledgeable but also socially responsible and globally aware.
        </p>
        <p>
          Join us on this exciting journey of discovery and innovation as we
          shape the future of education and empower the leaders of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About_Page;
