import React from "react";
import "./page_styles/Teacher_Home.css";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
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
    </div>
  );
};

export default Teacher_Home;
