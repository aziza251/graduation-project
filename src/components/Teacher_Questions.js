import React from "react";
import General_Header from "./General_Header";
import Teacher_Sidebar from "./Teacher_Sidebar";
import "../components/component_styles/Manage_Student.css";

const Teacher_Questions = () => {
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
        <h2>Questions</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th> CSV file</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
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

export default Teacher_Questions;
