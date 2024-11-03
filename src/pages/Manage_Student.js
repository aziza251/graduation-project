import React, { useEffect, useState } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import "./page_styles/Manage_Student.css";
import axios from "axios";

// Function to format date to MM/DD/YYYY
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const Manage_Student = () => {
  const [manageStudent, setManageStudent] = useState([]);

  useEffect(() => {
    const fetchManageStudent = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/manage-student"
        );
        setManageStudent(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchManageStudent();
  }, []);

  // Function to handle deleting a student
  const deleteStudent = async (student_id) => {
    const confirmDelete = window.confirm("Do you want to delete this student?");
    if (confirmDelete) {
      try {
        await axios.delete(
          `http://localhost:8000/manage-student/${student_id}`
        );
        const updatedStudents = manageStudent.filter(
          (student) => student.student_id !== student_id
        );
        setManageStudent(updatedStudents);
      } catch (error) {
        console.error("Error deleting student:", error);
      }
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {manageStudent.map((student) => (
              <tr key={student.student_id}>
                {" "}
                {/* use student.student_id */}
                <td>{student.identity_number}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{formatDate(student.date_of_birth)}</td>
                <td>{student.email}</td>
                <td>{student.photo}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteStudent(student.student_id)} // use student.student_id
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
