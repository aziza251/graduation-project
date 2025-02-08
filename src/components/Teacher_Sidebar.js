import React from "react";
import "../components/component_styles/Teacher_Sidebar.css";

import { Link } from "react-router-dom";
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
          <Link to="/create-exam">
            <FaPlusSquare className="icon" /> Create Exam
          </Link>
        </li>
        <li>
          <Link to="/generate-question-manually">
            <FaQuestionCircle className="icon" /> Generate Question (M)
          </Link>
        </li>
        <li>
          <Link to="/generate-question-automatically">
            <FaQuestionCircle className="icon" /> Generate Question (A)
          </Link>
        </li>
        <li>
          <Link to="/teacher-exam-history">
            <FaHistory className="icon" /> Exam History
          </Link>
        </li>

        <li>
          <Link to="/teacher-questions">
            <FaEye className="icon" /> View Questions
          </Link>
        </li>
        <li>
          <Link to="/manage-student">
            <FaUsers className="icon" /> Manage Student
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Teacher_Sidebar;
