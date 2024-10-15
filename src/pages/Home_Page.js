import React from "react";
import "./page_styles/Home_Page.css";

const Home_Page = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Uskudar University</h1>
        <p>
          Uskudar University is a leading educational institution located in the
          heart of Istanbul, providing cutting-edge education in various fields,
          including engineering, health sciences, and social sciences.
        </p>
        <p>
          Our mission is to cultivate knowledge through research and practice,
          while shaping future leaders who are prepared to meet the challenges
          of an ever-changing world. We offer a wide range of programs designed
          to foster innovation, creativity, and critical thinking.
        </p>
      </div>

      <div className="home-banner">
        <img
          src="https://international.uskudar.edu.tr/assets/img/1-int.webp" // Add your university image URL here
          alt="University photo"
          className="uni-image"
        />
      </div>
    </div>
  );
};

export default Home_Page;
