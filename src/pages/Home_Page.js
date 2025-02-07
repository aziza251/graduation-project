import React, { useState } from "react";
import Header from "../components/Header";
import "./page_styles/Home_Page.css";
import { FormControlLabel, Switch, Fade, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import HeartIcon from "@mui/icons-material/Favorite"; // Assuming you have a heart icon
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Apply ", "Study", "Become Professional !!!"];

// Create a styled Rating component
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

const Home_Page = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Header />

      {/* Home Page Section */}
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Uskudar University</h1>
          <p>
            Uskudar University is a leading educational institution located in
            the heart of Istanbul, providing cutting-edge education in various
            fields, including engineering, health sciences, and social sciences.
          </p>
          <p>
            Our mission is to cultivate knowledge through research and practice,
            while shaping future leaders who are prepared to meet the challenges
            of an ever-changing world. We offer a wide range of programs
            designed to foster innovation, creativity, and critical thinking.
          </p>
        </div>

        <div className="home-banner">
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <Box sx={{ display: "flex" }}>
            <Fade in={checked}>
              <img
                src="https://international.uskudar.edu.tr/assets/img/1-int.webp"
                alt="University photo"
                className="uni-image"
              />
            </Fade>
          </Box>
        </div>
      </div>

      {/* Facial Rating on Home Page */}
      <StyledRating
        style={{ marginLeft: "530px" }}
        name="highlight-selected-only"
        defaultValue={4}
        getLabelText={(value) => customIcons[value].label}
        IconContainerComponent={({ value, ...other }) => (
          <span {...other}>{customIcons[value].icon}</span>
        )}
        highlightSelectedOnly
      />

      {/* Content Page Section */}
      <div className="content-page flex-container">
        <div className="left-content">
          <h1>Why Üsküdar?</h1>
          <p>
            There is no alternative to Uskudar University in the clinical and
            real-world setting that offers chances to students interested in
            psychology and behavioral health sciences.
          </p>
          <Typography component="legend"></Typography>
          <StyledRating
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "80px",
            }}
            name="customized-color"
            defaultValue={5}
            precision={0.5}
            icon={<HeartIcon fontSize="inherit" />} // Heart icon for content page
            emptyIcon={
              <HeartIcon fontSize="inherit" style={{ color: "red" }} />
            } // Heart icon for empty state
          />
        </div>

        <div className="image-section">
          <img
            src="https://cdn.uskudar.edu.tr/uploads/images/2018/07/25/800/img-2151.JPG"
            alt="University photo"
            className="center-image"
          />
        </div>

        <div className="right-content">
          <h1>Why Üsküdar?</h1>
          <p>
            Üsküdar provides a range of scholarship alternatives to our
            students. In the fields of psychology, philosophy, health, genetics,
            and engineering sciences, Üsküdar University uses a
            multidisciplinary approach.
          </p>
          <Typography component="legend"></Typography>
          <StyledRating
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "100px",
            }}
            name="customized-color"
            defaultValue={5}
            precision={0.5}
            icon={<HeartIcon fontSize="inherit" />} // Heart icon for content page
            emptyIcon={
              <HeartIcon fontSize="inherit" style={{ color: "red" }} />
            } // Heart icon for empty state
          />
        </div>
      </div>

      <Box sx={{ width: "100%", margin: "30px" }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div className="about-page">
        <div className="about-content">
          <h1>About Uskudar University</h1>
          <p>
            Uskudar University is a premier educational institution located in
            the vibrant city of Istanbul. Established with the goal of fostering
            academic excellence, the university offers a diverse range of
            programs across various disciplines.
          </p>
        </div>

        <div className="about-banner">
          <img
            src="https://cdn.uskudar.edu.tr/uploads/images/2020/08/13/800/tip-fakultesi-2.JPG"
            alt="University photo"
            className="uni-image"
          />
        </div>
      </div>
    </>
  );
};

export default Home_Page;
