import React from "react";
import { useState } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import "../components/component_styles/Register.css"; // No need to change the CSS
import Contained_Button from "../components/Contained_Button";
import axios from "axios";

const Create_Exam = () => {
  const [examData, setExamData] = useState({
    subject_name: "",
    exam_title: "",
    exam_date: "",
    start_time: "",
    end_time: "",
    total_marks: "",
    csv_upload_path: "",
    created_at: "",
    status: "",
    number_of_questions: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setExamData({
      ...examData,
      [name]:
        name === "total_marks" || name === "number_of_questions"
          ? value
            ? parseInt(value, 10)
            : ""
          : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        subject_name: examData.subject_name,
        exam_title: examData.exam_title,
        exam_date: examData.exam_date,
        start_time: examData.start_time,
        end_time: examData.end_time,
        total_marks: parseInt(examData.total_marks) || null, // Convert to number
        number_of_questions: parseInt(examData.number_of_questions) || null, // Convert to number
        csv_upload_path: examData.csv_upload_path,
        created_at: new Date().toISOString(), // Send correct timestamp
        status: null, // Ensure status is NULL
      };

      const response = await axios.post(
        "http://localhost:8000/create-exam",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Exam created successfully!");
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error creating exam:", error);
      alert("Failed to create the exam. Please try again.");
    }
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="register-container" style={{ marginLeft: "340px" }}>
        <form onSubmit={handleSubmit}>
          <h1>Create Exam</h1>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="subject_name">Subject Name</label>
              <input
                type="text"
                id="subject_name"
                name="subject_name"
                value={examData.subject_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="exam_title">Exam Title</label>
              <input
                type="text"
                id="exam_title"
                name="exam_title"
                value={examData.exam_title}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="exam_date">Exam Date</label>
              <input
                type="date"
                id="exam_date"
                name="exam_date"
                value={examData.exam_date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="start_time">Start Time</label>
              <input
                type="time"
                id="start_time"
                name="start_time"
                value={examData.start_time}
                onChange={handleChange}
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
                value={examData.end_time}
                onChange={handleChange}
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="num_ques">Number of Questions</label>
              <input
                type="number"
                id="number_of_questions"
                name="number_of_questions"
                value={examData.number_of_questions}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="file">CSV Upload</label>
              <input
                type="file"
                id="file"
                name="file"
                value={examData.file}
                onChange={handleChange}
                required
                style={{ width: "100%", backgroundColor: "white" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="marks">Total Marks</label>
              <input
                type="number"
                id="total_marks"
                name="total_marks"
                value={examData.total_marks}
                onChange={handleChange}
                required
              />
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
