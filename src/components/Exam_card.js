import React from "react";
import "./component_styles/Exam_Card.css";
import Contained_Button from "./Contained_Button";

const handleStartExam = () => {
  console.log("Start Exam button clicked");
};

const handlePending = () => {
  alert("Exam has not started yet");
};

const handleExpired = () => {
  alert("This exam has expired");
};

const Exam_card = ({ status }) => {
  // Determine the dot color based on the status
  const getDotColor = () => {
    switch (status) {
      case "active":
        return "green-dot";
      case "pending":
        return "yellow-dot";
      case "expired":
        return "red-dot";
      default:
        return "gray-dot"; // A fallback color
    }
  };

  const getButtonClass = () => {
    switch (status) {
      case "active":
        return "green-button"; // Add a green class for active
      case "pending":
        return "yellow-button"; // Add a yellow class for pending
      case "expired":
        return "red-button"; // Add a red class for expired
      default:
        return "default-button"; // Default button color
    }
  };

  return (
    <div className="exam-card" style={{ width: "200px" }}>
      <div className={getDotColor()}></div>
      <h3 className="subject-title">Subject title</h3>
      <p className="exam-title">Exam title</p>
      <p className="exam-info">
        <span>Exam Date:</span> <br />
        <span>Exam Time:</span>
      </p>

      {/* Conditional rendering for different status buttons */}
      {status === "active" ? (
        <Contained_Button
          label="Start Exam"
          onClick={handleStartExam}
          className={getButtonClass()}
        />
      ) : status === "pending" ? (
        <Contained_Button
          label="Pending"
          onClick={handlePending}
          className={getButtonClass()}
        />
      ) : (
        <Contained_Button label="Expired" onClick={handleExpired} />
      )}
    </div>
  );
};

export default Exam_card;
