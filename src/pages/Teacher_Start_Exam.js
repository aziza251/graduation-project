import React from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import "./page_styles/Manage_Student.css";

const Teacher_Start_Exam = () => {
  const students = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 20, grade: "A" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 22,
      grade: "B",
    },
  ];

  // Function to handle live watch
  const handleLiveWatch = (studentId) => {
    // Implement the logic for watching the student's live stream
    // For example, open a new window or modal:
    alert(`Watching live stream of student with ID: ${studentId}`);
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Live Watch</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.name}</td>
                <td>
                  <i
                    className="fas fa-eye"
                    onClick={() => handleLiveWatch(student.id)}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "20px",
                    }}
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

export default Teacher_Start_Exam;
