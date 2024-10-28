const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

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

app.get("/teacher-exam-history", (req, res) => {
  connection.query("SELECT * from exam_history", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

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

app.delete("/manage-student/:id", (req, res) => {
  const studentId = req.params.id;
  const query = "DELETE FROM student WHERE student_id = ?"; // Adjust the table name and column as needed

  connection.query(query, [studentId], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      res.status(500).send("Error deleting student");
    } else {
      res.send("Student deleted successfully");
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
