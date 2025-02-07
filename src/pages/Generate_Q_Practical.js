import React from "react";
import "./page_styles/Generate_Q_Manually.css";
import Contained_Button from "../components/Contained_Button";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";

function Generate_Q_Practical() {
  const handleSave = (e) => {
    e.preventDefault();
    alert("Question Saved");
  };

  const handleAdd = (e) => {
    console.log("Add More");
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="generate-questions-container">
        <h2>Generate Questions</h2>
        <form>
          <div className="form-row">
            <label htmlFor="subjectTitle">Question Text</label>
            <input type="text" id="subjectTitle" name="subjectTitle" required />
          </div>
          <div className="form-row">
            <label htmlFor="question">Correct Output</label>
            <input
              type="text"
              id="question"
              name="question"
              required
              style={{ height: "150px" }}
            />
          </div>

          <div className="form-row">
            <label htmlFor="points">Points</label>
            <input type="number" id="points" name="points" required />
          </div>

          <div className="buttons-row">
            <div className="button-column">
              <Contained_Button label="Save" onClick={handleSave} />
            </div>
            <div className="button-column">
              <Contained_Button label="Add" onClick={handleAdd} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Generate_Q_Practical;
