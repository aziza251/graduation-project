import React from "react";
import "./page_styles/Generate_Q_Manually.css";
import Contained_Button from "../components/Contained_Button";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import axios from "axios";
import { jsPDF } from "jspdf";
function Generate_Q_Automatically() {
  const handleSave = async (e) => {
    e.preventDefault();
    const fileType = prompt(
      "Do you want to save as PDF or CSV?",
      "PDF or CSV"
    ).toLowerCase();

    const fileName = prompt(
      "Please enter the file name (without extension):",
      "questions"
    );
    if (!fileName) {
      alert("File name cannot be empty. Please provide a valid name.");
      return;
    }

    if (fileType === "pdf") {
      const doc = new jsPDF();
      questions.forEach((q, index) => {
        const positionY = 10 + index * 40; // Adjusted spacing for each question
        doc.text(`Question ${index + 1}: ${q.question}`, 10, positionY);
        doc.text(
          `Options: A) ${q.optionA} B) ${q.optionB} C) ${q.optionC} D) ${q.optionD}`,
          10,
          positionY + 10
        );
        doc.text(`Answer: ${q.answer}`, 10, positionY + 20);
        doc.text(`Points: ${q.points}`, 10, positionY + 30);
      });
      doc.save(`${fileName}.pdf`);
    } else if (fileType === "csv") {
      const csvContent = [
        "Subject Title,Question,Option A,Option B,Option C,Option D,Answer,Points",
        ...questions.map(
          (q) =>
            `${q.subjectTitle},${q.question},${q.optionA},${q.optionB},${q.optionC},${q.optionD},${q.answer},${q.points}`
        ),
      ].join("\n");

      const csvBlob = new Blob([csvContent], { type: "text/csv" });

      const formData = new FormData();
      formData.append("file", csvBlob, `${fileName}.csv`);
      formData.append("file_name", fileName); // Send file name
      formData.append("content", csvContent); // Send CSV content as well

      try {
        const response = await axios.post(
          "http://localhost:8000/generate-question",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log("Response from backend:", response.data);
      } catch (error) {
        console.error("Error sending CSV file to backend:", error);
      }
    } else {
      alert("Please choose either PDF or CSV format.");
    }
  };

  const handleAdd = (e) => {
    console.log("Add More");
  };
  const handleGenerate = (e) => {
    console.log("Generate");
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="generate-questions-container">
        <h2>Generate Questions</h2>
        <form>
          <div className="form-row">
            <label htmlFor="subjectTitle">Source Text</label>
            <input
              type="text"
              id="subjectTitle"
              name="subjectTitle"
              required
              style={{ width: "100%", height: "50%" }}
            />
          </div>
          <div className="form-row">
            <label htmlFor="question">Generated Question</label>
            <input type="text" id="question" name="question" required />
          </div>
          <div className="options-row">
            <div className="form-column">
              <label htmlFor="optionA">Option A</label>
              <input
                type="text"
                id="optionA"
                name="optionA"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="optionB">Option B</label>
              <input
                type="text"
                id="optionB"
                name="optionB"
                required
                style={{ width: "95%" }}
              />
            </div>
          </div>
          <div className="options-row">
            <div className="form-column">
              <label htmlFor="optionC">Option C</label>
              <input
                type="text"
                id="optionC"
                name="optionC"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-column">
              <label htmlFor="optionD">Option D</label>
              <input
                type="text"
                id="optionD"
                name="optionD"
                required
                style={{ width: "95%" }}
              />
            </div>
          </div>

          {/* Dropdown for Answer */}
          <div className="form-row">
            <label htmlFor="answer">Answer</label>
            <select id="answer" name="answer" required>
              <option value="">Select the correct answer</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
              <option value="D">Option D</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="points">Points</label>
            <input type="number" id="points" name="points" required />
          </div>

          <div className="buttons-row">
            <div className="button-column">
              <Contained_Button label="Save" onClick={handleSave} />
            </div>
            <div className="button-column">
              <Contained_Button label="Add" onClick={handleAdd} />
            </div>
            <div className="button-column">
              <Contained_Button label="Generate" onClick={handleGenerate} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Generate_Q_Automatically;
