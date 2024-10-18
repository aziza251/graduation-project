import React, { useState } from "react"; // Import useState for state management
import General_Header from "./General_Header";
import Teacher_Sidebar from "./Teacher_Sidebar";
import "./component_styles/Manage_Student.css";
import { hover } from "@testing-library/user-event/dist/hover";

const Manage_Student = () => {
  // Use useState to manage the students array
  const [students, setStudents] = useState([
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
    // Add more students as needed...
  ]);

  // Function to handle deleting a student
  const deleteStudent = (id) => {
    // Ask for confirmation before deletion
    const confirmDelete = window.confirm("Do you want to delete this student?");
    if (confirmDelete) {
      // Filter out the student with the given id if confirmed
      const updatedStudents = students.filter((student) => student.id !== id);
      // Update the state with the new student list
      setStudents(updatedStudents);
    }
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />

      <div className="student-table-container">
        <h2>Student Information</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Actions</th> {/* Add Actions column for buttons */}
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
                <td>{student.grade}</td>
                <td>
                  {/* Delete button for each student */}
                  <button
                    className="delete-button"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Manage_Student;
