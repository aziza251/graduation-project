const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const cron = require("node-cron");

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

const connection = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "graduation_project",
  port: 3306,
});

// fetching data on teacher exam history page
app.get("/teacher-exam-history", (req, res) => {
  connection.query("SELECT * from exam_history", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// fetching data on student exam results page
app.get("/student-exam-history", (req, res) => {
  connection.query(
    " SELECT exam_history_id, subject_name, exam_title, exam_date, average_mark, participants,  question_num FROM exam_history",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// fetching data on my professors page
app.get("/my-professors", (req, res) => {
  connection.query(
    " SELECT teacher_id, first_name, last_name, email, photo  FROM teacher",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// fetching student marks,,, not working yet :(
app.get("/my-marks", (req, res) => {
  const studentId = req.query.student_id;

  if (!studentId) {
    return res.status(400).send("Student ID is required");
  }

  const query = `
    SELECT 
      student_marks.mark_id,
      exam.subject_name,
      exam.exam_title,
      exam.exam_date,
      student_marks.marks_obtained,
      student_marks.total_exam_mark,
      student_marks.deducted_points
    FROM student_marks
    JOIN exam_attempt ON student_marks.attempt_id = exam_attempt.attempt_id
    JOIN exam ON exam_attempt.exam_id = exam.exam_id
    WHERE student_marks.student_id = ?;`;

  console.log("Querying with student ID:", studentId);

  connection.query(query, [studentId], (err, results) => {
    if (err) {
      console.error("Error fetching marks data:", err);
      return res.status(500).send("Error fetching marks data");
    }

    if (results.length === 0) {
      console.log("No marks found for student ID:", studentId);
    } else {
      console.log("Marks found:", results);
    }

    res.json(results);
  });
});

// fetching student info in manage student page
app.get("/manage-student", (req, res) => {
  connection.query(
    "SELECT identity_number, first_name, last_name, date_of_birth,  email, photo FROM student",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// fetching data on my exam card
app.get("/exam-card", (req, res) => {
  connection.query(
    "SELECT subject_name, exam_title, number_of_questions, exam_date, start_time, end_time, status FROM exam",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// deleting the spesific student ,,, not working yet :(
app.delete("/manage-student/:id", (req, res) => {
  console.log("Route hit");
  const studentId = req.params.id;
  console.log("Received studentId for deletion:", studentId); // Log the received ID

  const query = "DELETE FROM student WHERE student_id = ?";
  connection.query(query, [studentId], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      res.status(500).send("Error deleting student");
    } else {
      res.send("Student deleted successfully");
      console.log("Deletion result:", result); // Log the query result
    }
  });
});

// Schedule the job to run daily at midnight, automatically updating exam statuses
cron.schedule("*/1 * * * *", () => {
  const updateStatusQuery = `
  UPDATE exam
  SET status = CASE 
      WHEN exam_date < CURDATE() THEN 1  -- Expired if the exam date is in the past
      WHEN exam_date = CURDATE() AND TIME(NOW()) > ADDTIME(end_time, '00:01:00') THEN 1  -- Expired if current time is more than 1 minute after end time
      WHEN exam_date = CURDATE() AND TIME(NOW()) BETWEEN start_time AND end_time THEN 0  -- Active if current time is during the exam
      WHEN exam_date = CURDATE() AND TIME(NOW()) < start_time THEN NULL  -- Upcoming if current time is before the start time
      WHEN exam_date > CURDATE() THEN NULL  -- Upcoming if exam date is in the future
      ELSE NULL
  END;
`;

  connection.query(updateStatusQuery, (error, results) => {
    if (error) {
      console.error("Error updating exam statuses:", error);
    } else {
      console.log("Exam statuses updated successfully.");
    }
  });
});

connection.connect((err) => {
  if (err) {
    console.error("cant connect to the database", err);
    return;
  }
  console.log("connected successfully to the database");
});
