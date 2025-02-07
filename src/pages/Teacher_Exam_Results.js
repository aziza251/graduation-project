import React from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import "./page_styles/Manage_Student.css";
const Teacher_Exam_Results = () => {
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
        <h2>Exam Results</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Number</th>
              <th>Fist Name</th>
              <th>Last Name </th>
              <th>Subject title </th>
              <th>Exam title </th>
              <th>Date</th>
              <th>Marks </th>
              <th>Screenshots </th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      th
    </>
  );
};

export default Teacher_Exam_Results;
