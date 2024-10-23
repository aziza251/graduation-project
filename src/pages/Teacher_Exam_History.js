import React from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";

import "./page_styles/Manage_Student.css";

const Teacher_Exam_History = () => {
  const students = [
    { id: 1, name: "Mid Term", email: "john@example.com", age: 20, grade: "A" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 22,
      grade: "B",
    },
  ];

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="student-table-container">
        <h2>Exam History</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Subject title</th>
              <th>Exam title</th>
              <th>Date </th>
              <th>Start Time </th>
              <th>End Time </th>
              <th>Question Number </th>
              <th>Average </th>
              <th>Csv </th>
              <th>Attendee </th>
              <th>Suspicious Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      th
    </>
  );
};

export default Teacher_Exam_History;
