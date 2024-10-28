import React from "react";
import "./page_styles/Teacher_Home.css";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import Exam_card from "../components/Exam_card";
import {
  FaPlusSquare,
  FaQuestionCircle,
  FaHistory,
  FaCheckSquare,
  FaEye,
  FaUsers,
} from "react-icons/fa";

const Teacher_Home = () => {
  return (
    <div>
      <General_Header />
      <Teacher_Sidebar />
      <div className="card-container">
        <Exam_card status="active" />
        <Exam_card status="pending" />
        <Exam_card status="expired" />
      </div>
    </div>
  );
};

export default Teacher_Home;
