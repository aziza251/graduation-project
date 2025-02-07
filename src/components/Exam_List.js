import React, { useEffect, useState } from "react";
import Exam_card from "./Exam_card";
import axios from "axios";

const ExamList = () => {
  const [examCard, setExamCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamCard = async () => {
      try {
        const response = await axios.get("http://localhost:8000/exam-card");
        console.log("Fetched Data:", response.data); // Debugging step
        setExamCard(response.data);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchExamCard();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A"; // Handle missing values

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid date format:", dateString);
      return "Invalid Date"; // Return a fallback string
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Function to format time to HH:mm
  const formatTime = (timeString) => {
    const date = new Date(`1970-01-01T${timeString}`); // Assuming time is in HH:mm format
    const hours = String(date.getHours()).padStart(2, "0"); // Get hours with leading zero
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Get minutes with leading zero
    return `${hours}:${minutes}`; // Format as HH:mm
  };

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="exam-list">
      {examCard.map((exam) => (
        <Exam_card
          key={exam.exam_id}
          subjectTitle={exam.subject_name}
          examTitle={exam.exam_title}
          numOfQuestions={exam.number_of_questions}
          examDate={formatDate(exam.exam_date)} // Format the exam date
          examTime={formatTime(exam.start_time)} // Format the start time
          endTime={formatTime(exam.end_time)} // Format the end time
          created_at={formatDate(exam.created_at)} // Assuming you have a 'created_at' field in your data
          status={exam.status} // Assuming you have a 'status' field in your data
        />
      ))}
    </div>
  );
};

export default ExamList;
