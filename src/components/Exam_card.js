import React from "react";
import "./component_styles/Exam_Card.css";
import Contained_Button from "./Contained_Button";
import { BorderColor } from "@mui/icons-material";

const handleStartExam = () => {
  console.log("Start Exam button clicked");
};

const handlePending = () => {
  alert("Exam has not started yet");
};

const handleExpired = () => {
  alert("This exam has expired");
};

const Exam_card = ({
  subjectTitle,
  examTitle,
  numOfQuestions,
  examDate,
  examTime,
  endTime,
  created_at,
  status,
}) => {
  console.log("Status:", status);
  const getDotColor = () => {
    switch (status) {
      case 0: // Active
        return "green-dot";
      case 1: // Expired
        return "red-dot";
      case null: // Pending
        return "yellow-dot";
    }
  };

  const getButtonClass = () => {
    switch (status) {
      case 0: // Active
        return "green-button";
      case 1: // Expired
        return "red-button";
      case null: // Pending
        return "yellow-button";
    }
  };

  return (
    <div className="exam-card-container">
      <div
        className={getDotColor()}
        style={{ backgroundColor: getDotColor(status) }}
      ></div>
      <h3 className="subject-title">{subjectTitle}</h3>
      <p className="exam-title">{examTitle}</p>
      <p className="exam-info">
        <span>
          <span style={{ fontWeight: "bold" }}>Number of questions:</span>{" "}
          {numOfQuestions}
        </span>{" "}
        <br />
        <span>
          <span style={{ fontWeight: "bold" }}>Exam Date: </span> {examDate}
        </span>{" "}
        <br />
        <span>
          <span style={{ fontWeight: "bold" }}>Start Time: </span>
          {examTime}
        </span>{" "}
        <br />
        <span>
          <span style={{ fontWeight: "bold" }}>End Time: </span>
          {endTime}
        </span>
        <span>
          <br />
          <span style={{ fontWeight: "bold" }}>Created: </span>
          {created_at}
          <br />
          <span style={{ visibility: "hidden" }}>Status: </span>
          {status}
        </span>
      </p>
      {/* Conditional rendering for different status buttons */}
      {status === 0 ? ( // Active
        <Contained_Button
          label="Start Exam"
          onClick={handleStartExam}
          className={getButtonClass()}
        />
      ) : status === 1 ? ( // Expired
        <Contained_Button
          label="Expired"
          onClick={handleExpired}
          className={getButtonClass()}
        />
      ) : (
        // Pending
        <Contained_Button
          label="Pending"
          onClick={handlePending}
          className={getButtonClass()}
        />
      )}
    </div>
  );
};

export default Exam_card;
