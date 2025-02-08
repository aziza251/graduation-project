import React, { useEffect, useState } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import axios from "axios";
import "./page_styles/Manage_Student.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS
import { Link } from "react-router-dom";
const Teacher_Exam_History = () => {
  const [examHistory, setExamHistory] = useState([]);

  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/teacher-exam-history"
        );
        console.log("Fetched data:", response.data); // Log fetched data
        setExamHistory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchExamHistory();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust the locale if needed
  };
  // Function to format time to HH:mm
  const formatTime = (timeString) => {
    const date = new Date(`1970-01-01T${timeString}Z`); // Assuming time is in HH:mm format
    const hours = String(date.getHours()).padStart(2, "0"); // Get hours with leading zero
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Get minutes with leading zero
    return `${hours}:${minutes}`; // Format as HH:mm
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="student-table-container">
        <h2>Exam History</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Subject Title</th>
              <th>Exam Title</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Question Number</th>
              <th>Average</th>
              <th>Attendees</th>
              <th>CSV</th>
              <th>View Results</th>
            </tr>
          </thead>
          <tbody>
            {examHistory.map((exam) => (
              <tr key={exam.exam_history_id}>
                <td>{exam.subject_name}</td>
                <td>{exam.exam_title}</td>
                <td>{formatDate(exam.exam_date)}</td> {/* Format the date */}
                <td>{formatTime(exam.start_time)}</td>
                <td>{formatTime(exam.end_time)}</td>
                <td>{exam.participants}</td>
                <td>{exam.average_mark}</td>
                <td>{exam.participants}</td>
                <td>{exam.csv_upload_path}</td>
                <td>
                  <i
                    className="fa fa-folder"
                    onClick={() =>
                      (window.location.href = "/teacher-exam-results")
                    }
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    title="View"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Teacher_Exam_History;
