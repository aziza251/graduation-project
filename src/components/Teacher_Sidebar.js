import React from "react";
import "../components/component_styles/Teacher_Sidebar.css";
import {
  FaPlusSquare,
  FaQuestionCircle,
  FaHistory,
  FaCheckSquare,
  FaEye,
  FaUsers,
} from "react-icons/fa";

const Teacher_Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="/create-exam">
            <FaPlusSquare className="icon" /> Create Exam
          </a>
        </li>
        <li>
          <a href="/generate-question">
            <FaQuestionCircle className="icon" /> Generate Question
          </a>
        </li>
        <li>
          <a href="/exam-history">
            <FaHistory className="icon" /> Exam History
          </a>
        </li>
        <li>
          <a href="/exam-results">
            <FaCheckSquare className="icon" /> Exam Results
          </a>
        </li>
        <li>
          <a href="/view-questions">
            <FaEye className="icon" /> View Questions
          </a>
        </li>
        <li>
          <a href="/manage-students">
            <FaUsers className="icon" /> Manage Students
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Teacher_Sidebar;
