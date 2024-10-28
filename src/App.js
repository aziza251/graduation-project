import React from "react";
import {
  BrowserRouter as Router, // Correct Router component to wrap the Routes
  Route,
  Routes,
} from "react-router-dom";
import Home_Page from "./pages/Home_Page";
import Teacher_Home from "./pages/Teacher_Home";
import Register from "./components/Register";
import Manage_Student from "./pages/Manage_Student";
import Student_Exam_History from "./pages/Student_Exam_History";
import Teacher_Exam_History from "./pages/Teacher_Exam_History";
import Teacher_Exam_Results from "./pages/Teacher_Exam_Results";
import Teacher_Questions from "./pages/Teacher_Questions";
import Teacher_Start_Exam from "./pages/Teacher_Start_Exam";
import Create_Exam from "./pages/Create_Exam";
import Login from "./components/Login";
import Generate_Q_Manually from "./pages/Generate_Q_Manually";
import Generate_Q_Automatically from "./pages/Generate_Q_Automatically";
import Generate_Q_Practical from "./pages/Generate_Q_Practical";
import Save_Button_Clicked from "./pages/Generate_Q_Save_Button_Clicked";
import Student_Home from "./pages/Student_Home";
import My_Professors from "./pages/My_Professors";
import My_Marks from "./pages/My_Marks";
import Exam_card from "./components/Exam_card";

import axio from "axios";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher-home" element={<Teacher_Home />} />
          <Route path="/manage-student" element={<Manage_Student />} />

          <Route
            path="/teacher-exam-history"
            element={<Teacher_Exam_History />}
          />
          <Route
            path="/teacher-exam-results"
            element={<Teacher_Exam_Results />}
          />
          <Route path="/teacher-questions" element={<Teacher_Questions />} />

          <Route path="/create-exam" element={<Create_Exam />} />
          <Route
            path="/generate-question-manually"
            element={<Generate_Q_Manually />}
          />

          <Route path="/student-home" element={<Student_Home />} />
          <Route
            path="/student-exam-history"
            element={<Student_Exam_History />}
          />

          <Route path="/my-professors" element={<My_Professors />} />
          <Route path="/my-marks" element={<My_Marks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
