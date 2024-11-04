import React, { useState, useEffect } from "react";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";
import axios from "axios";
import "./page_styles/Manage_Student.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

const Teacher_Questions = () => {
  const [questions, setQuestions] = useState([]);

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

  // Function for handling actions
  const handleView = (csvFileUrl) => {
    // Check if the URL is valid
    if (csvFileUrl) {
      // Open the document in a new tab
      window.open(csvFileUrl, "_blank");
    } else {
      alert("Invalid file URL.");
    }
  };

  const handleDelete = async (csvId) => {
    try {
      // Send a DELETE request to delete the question
      await axios.delete(`http://localhost:8000/delete-question/${csvId}`);
      // Remove the deleted question from the state
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.csv_id !== csvId)
      );
      console.log("Deleted question with ID:", csvId);
    } catch (error) {
      console.error("Error deleting the question", error);
    }
  };

  const handleDownload = async (csvFileUrl) => {
    try {
      // Ensure csvFileUrl is a proper HTTP URL
      if (!csvFileUrl.startsWith("http")) {
        throw new Error("Invalid file URL");
      }

      // Fetch the CSV file
      const response = await axios.get(csvFileUrl, {
        responseType: "blob", // Important to specify blob type
      });

      // Create a URL for the blob
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);

      // Create a link element and trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", csvFileUrl.split("/").pop()); // Use the extracted file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Cleanup

      // Release the object URL after the download
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
              <th>Subject Name</th>
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
                    onClick={() => handleDownload(question.csv_file_url)}
                    style={{ cursor: "pointer" }}
                    title="Download"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Teacher_Questions;
