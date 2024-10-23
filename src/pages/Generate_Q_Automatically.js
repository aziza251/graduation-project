import React from "react";
import "./page_styles/Generate_Q_Manually.css";
import Contained_Button from "../components/Contained_Button";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";

function Generate_Q_Automatically() {
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
            <label htmlFor="subjectTitle">Source Text</label>
            <input type="text" id="subjectTitle" name="subjectTitle" required />
          </div>
          <div className="form-row">
            <label htmlFor="question">Generated Question</label>
            <input type="text" id="question" name="question" required />
          </div>
          <div className="options-row">
            <div className="form-column">
              <label htmlFor="optionA">Option A</label>
              <input
                type="text"
                id="optionA"
                name="optionA"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="optionB">Option B</label>
              <input
                type="text"
                id="optionB"
                name="optionB"
                required
                style={{ width: "95%" }}
              />
            </div>
          </div>
          <div className="options-row">
            <div className="form-column">
              <label htmlFor="optionC">Option C</label>
              <input
                type="text"
                id="optionC"
                name="optionC"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="optionD">Option D</label>
              <input
                type="text"
                id="optionD"
                name="optionD"
                required
                style={{ width: "95%" }}
              />
            </div>
          </div>

          {/* Dropdown for Answer */}
          <div className="form-row">
            <label htmlFor="answer">Answer</label>
            <select id="answer" name="answer" required>
              <option value="">Select the correct answer</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
              <option value="D">Option D</option>
            </select>
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

export default Generate_Q_Automatically;
