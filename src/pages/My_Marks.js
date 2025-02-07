import React, { useEffect, useState } from "react";
import General_Header from "../components/General_Header";
import Student_Sidebar from "../components/Student_Sidebar";
import "./page_styles/Manage_Student.css";
import axios from "axios";
const My_Marks = () => {
  const [studentMarks, setStudentMarks] = useState([]);

  useEffect(() => {
    const fetchStudentMarks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/my-marks");
        setStudentMarks(response.data);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
      fetchStudentMarks();
    };
  }, []);

  return (
    <>
      <General_Header />
      <Student_Sidebar />
      <div className="student-table-container">
        <h2>My Marks</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Subject title </th>
              <th>Exam title </th>
              <th>Date</th>
              <th> Score </th>
              <th>General Average </th>
              <th> Deducted Points</th>
            </tr>
          </thead>
          <tbody>
            {studentMarks.map((marks) => (
              <tr key={marks.mark_id}>
                <td>{marks.subject_name}</td>
                <td>{marks.exam_title}</td>
                <td>{marks.exam_date}</td>
                <td>{marks.total_exam_mark}</td>
                <td>{marks.marks_obtained}</td>
                <td>{marks.deducted_points}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      th
    </>
  );
};

export default My_Marks;
