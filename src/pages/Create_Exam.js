import React from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import "../components/component_styles/Register.css"; // No need to change the CSS
import Contained_Button from "../components/Contained_Button";

const handleSubmit = (event) => {
  console.log("Exam created successfully!");
};
const Create_Exam = () => {
  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="register-container" style={{ marginLeft: "340px" }}>
        <form>
          <h1>Create Exam</h1>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="subject_name">Subject Name</label>
              <input
                type="text"
                id="subject_name"
                name="subject_name"
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="exam_title">Exam Title</label>
              <input type="text" id="exam_title" name="exam_title" required />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="exam_date">Exam Date</label>
              <input type="date" id="exam_date" name="exam_date" required />
            </div>
            <div className="form-column">
              <label htmlFor="start_time">Start Time</label>
              <input
                type="time"
                id="start_time"
                name="start_time"
                required
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="end_time">End Time</label>
              <input
                type="time"
                id="end_time"
                name="end_time"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="num_ques">Number of Questions</label>
              <input type="number" id="num_ques" name="num_ques" required />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="file">CSV Upload</label>
              <input
                type="file"
                id="file"
                name="file"
                required
                style={{ width: "100%", backgroundColor: "white" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="marks">Total Marks</label>
              <input type="text" id="marks" name="marks" required />
            </div>
          </div>

          <div className="form-row">
            <div className="button-container">
              <Contained_Button label="Create Exam" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create_Exam;
