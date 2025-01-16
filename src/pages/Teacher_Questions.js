import React, { useState, useEffect } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import axios from "axios";
import "./page_styles/Manage_Student.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

const Teacher_Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [viewContent, setViewContent] = useState(null); // Store CSV content
  const [showModal, setShowModal] = useState(false); // Modal visibility

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/view-questions"
        );
        console.log("Fetched questions:", response.data); // Log the response
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchQuestions();
  }, []);

  // Function for handling actions
  const handleView = async (csvFileUrl) => {
    console.log("Fetching file from:", csvFileUrl); // Log the URL to confirm it's correct
    try {
      const response = await axios.get(csvFileUrl, { responseType: "blob" });
      const text = await response.data.text(); // Read the CSV content as text

      // Display the CSV content or use it as needed
      setViewContent(text);
      setShowModal(true); // Open modal or similar UI element
    } catch (error) {
      console.error("Error fetching file content", error);
    }
  };

  const handleDelete = async (csvId) => {
    try {
      console.log("Deleting question with ID:", csvId); // Debugging: log the csvId
      const response = await axios.delete(
        `http://localhost:8000/delete-question/${csvId}`
      );

      if (response.status === 200) {
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.csv_id !== csvId)
        );
        console.log("Deleted question with ID:", csvId);
      } else {
        console.error("Failed to delete question. Response:", response);
      }
    } catch (error) {
      console.error("Error deleting the question:", error);
    }
  };

  const handleDownload = async (file_name) => {
    try {
      // Construct the full URL of the file
      const fileUrl = `http://localhost:8000/uploads/${file_name}`;

      // Make the request to fetch the file as a Blob
      const response = await axios.get(fileUrl, {
        responseType: "blob",
      });

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "text/csv" });

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element for downloading
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file_name); // Use the file name for the download

      // Append the link to the body, click it, and then remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the object URL to free memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file", error);
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
            {questions.map(
              (question) => (
                console.log("Question data: ", question),
                (
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
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying CSV content */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>CSV File Content</h3>
            <pre>{viewContent}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default Teacher_Questions;
