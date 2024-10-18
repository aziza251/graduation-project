import React from "react";
import General_Header from "./General_Header";
import Student_Sidebar from "./Student_Sidebar";
import "./component_styles/Manage_Student.css";

const Student_Exam_History = () => {
  const students = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 20, grade: "A" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 22,
      grade: "B",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", age: 21, grade: "C" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 19,
      grade: "A",
    },
  ];

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
              <th>Date </th>
              <th>Score </th>
              <th>Final Grade </th>
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
