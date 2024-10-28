import React, { useState, useEffect } from "react"; // Import useState for state management
import General_Header from "../components/General_Header";
import Student_Sidebar from "../components/Student_Sidebar";
import "./page_styles/Manage_Student.css";
import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios";

const My_Professors = () => {
  const [professor, setProfessor] = useState([]);

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const response = await axios.get("http://localhost:8000/my-professors");
        setProfessor(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchProfessor();
  }, []);

  return (
    <>
      <General_Header />
      <Student_Sidebar />

      <div className="student-table-container">
        <h2>Professor Information</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>

              <th>Email</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {professor.map((prof) => (
              <tr key={prof.teacher_id}>
                <td>{prof.first_name}</td>
                <td>{prof.last_name}</td>
                <td>{prof.email}</td>

                <td>{prof.photo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default My_Professors;
