import React, { useState, useEffect } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import axios from "axios";
import "./page_styles/Manage_Student.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS
import jsPDF from "jspdf";
import "jspdf-autotable";

const Teacher_Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [viewContent, setViewContent] = useState([]); // Store CSV content as array
  const [showModal, setShowModal] = useState(false); // Modal visibility

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/view-questions"
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchQuestions();
  }, []);

  // Function to view CSV content
  const handleView = async (csvFileUrl) => {
    try {
      const response = await axios.get(csvFileUrl, { responseType: "blob" });
      const text = await response.data.text();

      // Convert CSV text into a structured table format
      const rows = text
        .trim()
        .split("\n")
        .map((row) => row.split(","));

      setViewContent(rows); // Store parsed data
      setShowModal(true); // Show modal
    } catch (error) {
      console.error("Error fetching file content", error);
    }
  };

  const handleDelete = async (csvId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/delete-question/${csvId}`
      );
      if (response.status === 200) {
        setQuestions((prevQuestions) =>
          prevQuestions.filter((q) => q.csv_id !== csvId)
        );
      } else {
        console.error("Failed to delete question");
      }
    } catch (error) {
      console.error("Error deleting the question:", error);
    }
  };

  const handleDownload = async (file_name) => {
    try {
      const fileUrl = `http://localhost:8000/uploads/${file_name}`;
      const response = await axios.get(fileUrl, { responseType: "blob" });

      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file_name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  const handleDownloadPDF = async (file_name) => {
    try {
      const fileUrl = `http://localhost:8000/uploads/${file_name}`;
      const response = await axios.get(fileUrl, { responseType: "blob" });

      const text = await response.data.text();
      const rows = text
        .trim()
        .split("\n")
        .map((row) => row.split(","));

      if (rows.length === 0) {
        console.error("No data found in the CSV file");
        return;
      }

      const doc = new jsPDF();
      doc.text("CSV File: " + file_name, 14, 10);
      doc.autoTable({
        head: [rows[0]],
        body: rows.slice(1),
      });

      doc.save(file_name.replace(".csv", ".pdf"));
    } catch (error) {
      console.error("Error converting CSV to PDF", error);
    }
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="student-table-container">
        <h2>Questions</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>CSV File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.csv_id}>
                <td>{question.file_name}</td>
                <td>
                  <i
                    className="fa fa-folder"
                    onClick={() => handleView(question.csv_file_url)}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    title="View"
                  ></i>
                </td>
                <td>
                  <i
                    className="fa fa-trash"
                    onClick={() => handleDelete(question.csv_id)}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    title="Delete"
                  ></i>
                  <i
                    className="fa fa-download"
                    onClick={() => handleDownload(question.file_name)}
                    style={{ cursor: "pointer" }}
                    title="Download"
                  ></i>

                  <i
                    className="fa fa-file-pdf-o"
                    onClick={() => handleDownloadPDF(question.file_name)}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginLeft: "10px",
                    }}
                    title="Download as PDF"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying CSV content */}
      {showModal && (
        <div className="modal">
          <div
            className="modal-content"
            style={{ width: "90%", height: "80vh", maxWidth: "1200px" }}
          >
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>CSV File Content</h3>
            {viewContent.length > 0 ? (
              <table className="csv-table">
                <thead style={{ gap: "10px" }}>
                  <tr>
                    {viewContent[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {viewContent.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data found in the file.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Teacher_Questions;
