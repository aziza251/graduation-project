import React, { useState, useEffect } from "react";
import General_Header from "../components/General_Header";
import Student_Sidebar from "../components/Student_Sidebar";
import "./page_styles/Manage_Student.css";
import axios from "axios";

const Student_Exam_History = () => {
  const [StudentExamHistory, setStudentExamHistory] = useState([]);

  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/student-exam-history"
        );
        console.log("Fetched data:", response.data); // Log fetched data
        setStudentExamHistory(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchExamHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust the locale if needed
  };
  return (
    <>
      <General_Header />
      <Student_Sidebar />
      <div className="student-table-container">
        <h2>Exam History</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Subject title</th>
              <th>Exam title</th>
              <th>Date </th>
              <th>Average </th>
              <th> Participants </th>
              <th>Number of Questions</th>
            </tr>
          </thead>
          <tbody>
            {StudentExamHistory.map((exam) => (
              <tr key={exam.exam_history_id}>
                <td>{exam.subject_name}</td>
                <td>{exam.exam_title}</td>
                <td>{formatDate(exam.exam_date)}</td> {/* Format the date */}
                <td>{exam.average_mark}</td>
                <td>{exam.participants}</td>
                <td>{exam.question_num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      th
    </>
  );
};

export default Student_Exam_History;
