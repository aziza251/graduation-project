import React from "react";
import Student_Sidebar from "../components/Student_Sidebar";
import General_Header from "../components/General_Header";
import Exam_card from "../components/Exam_card";
import ExamList from "../components/Exam_List";

const Student_Home = () => {
  return (
    <div>
      <General_Header />
      <Student_Sidebar />
      <div className="card-container">
        <ExamList />
      </div>
    </div>
  );
};

export default Student_Home;
