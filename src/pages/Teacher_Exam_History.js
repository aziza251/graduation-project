import React, { useEffect, useState } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import axios from "axios";
import "./page_styles/Manage_Student.css";

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
              <th>Suspicious Actions</th>
            </tr>
          </thead>
          <tbody>
            {examHistory.map((exam) => (
              <tr key={exam.exam_history_id}>
                <td>{exam.subject_name}</td>
                <td>{exam.exam_title}</td>
                <td>{formatDate(exam.exam_date)}</td> {/* Format the date */}
                <td>{exam.start_time}</td>
                <td>{exam.end_time}</td>
                <td>{exam.participants}</td>
                <td>{exam.average_mark}</td>
                <td>{exam.participants}</td>
                <td>{exam.csv_upload_path}</td>
                <td>{exam.suspicious_action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Teacher_Exam_History;