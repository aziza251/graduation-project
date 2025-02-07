import React from "react";
import {
  FaBook, // For "View Exam History"
  FaChalkboardTeacher, // For "My Professors"
  FaClipboardList, // For "My Marks"
} from "react-icons/fa";
import "../components/component_styles/Teacher_Sidebar.css";

const Student_Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="/student-exam-history">
            <FaBook className="icon" /> View Exam History
          </a>
        </li>
        <li>
          <a href="/my-professors">
            <FaChalkboardTeacher className="icon" /> My Professors
          </a>
        </li>
        <li>
          <a href="/my-marks">
            <FaClipboardList className="icon" /> My Marks
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Student_Sidebar;
