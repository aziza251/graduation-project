import React from "react";
import General_Header from "./General_Header";
import Teacher_Sidebar from "./Teacher_Sidebar";
import "./component_styles/Register.css";

const Create_Exam = () => {
  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="register-container">
        <form>
          <h1>Create Exam</h1>
          <div className="form-row">
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
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="date_of_birth">Exam Date</label>
              <input type="date" id="exam_date" name="exam_date" required />
            </div>
            <div className="form-column">
              <label htmlFor="start_time">Start Time</label>
              <input
                type="time"
                id="start_time"
                name="start_time"
                required
                style={{ width: "90%" }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="end_time">End Time</label>
              <input
                type="time"
                id="end_time"
                name="end_time"
                required
                style={{ width: "90%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="num_ques">Number of Question</label>
              <input type="number" id="num_ques" name="num_ques" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="file">CSV Upload</label>
              <input
                type="file"
                id="file"
                name="file"
                required
                style={{ width: "90%", backgroundColor: "white" }}
              />
            </div>
            <div className="form-column photo-column">
              <label htmlFor="marks">Total Marks</label>
              <input type="text" id="marks" name="marks" required />
            </div>
          </div>
          <div className="form-row">
            <div className="button-container">
              <button type="submit" id="submit" name="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create_Exam;
