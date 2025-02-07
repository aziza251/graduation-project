const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const cron = require("node-cron");
const PDFDocument = require("pdfkit");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

app.use(express.json());
app.use(cors());

app.listen(8001, () => {
  console.log("Server is running on port 8000");
});

const connection = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "graduation_project",
  port: 3306,
});
const uploadDir =
  "C:\\Users\\dell\\Desktop\\graduate\\graduation-project\\uploads";

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save with the original file name
  },
});

const upload = multer({ storage: storage });

// Create an upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully!");
});

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

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
    "SELECT subject_name, exam_title, number_of_questions, exam_date, start_time, end_time, created_at, status FROM exam",
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

app.get("/view-questions", (req, res) => {
  connection.query(
    "SELECT csv_id, file_name, csv_file_url, file_content  FROM csv_files",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//delete question
app.delete("/delete-question/:csvId", (req, res) => {
  const csvId = req.params.csvId;

  connection.query(
    "DELETE FROM csv_files WHERE csv_id = ?",
    [csvId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error deleting the question");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Question not found");
      }

      res.send("Question deleted successfully");
    }
  );
});

// Endpoint to handle file upload
//generate questions
app.post("/generate-question", upload.single("file"), (req, res) => {
  console.log("Received file:", req.file);

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const filePath = req.file.path;
  console.log("File path:", filePath);

  // Ensure file reading happens after file is saved successfully
  fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.error("Error reading file content:", err);
      return res.status(500).send("Error reading file content");
    }

    const csvFileUrl = `http://localhost:8000/uploads/${req.file.filename}`;

    connection.query(
      "INSERT INTO csv_files (csv_file_url, file_name, file_content) VALUES (?, ?, ?)",
      [csvFileUrl, req.file.filename, fileContent],
      (err, result) => {
        if (err) {
          console.error("Error inserting CSV file data:", err);
          return res.status(500).send("Error inserting CSV file data");
        }
        console.log("CSV file and content inserted successfully:", result);
        res.status(200).send("CSV file uploaded and data saved successfully");
      }
    );
  });
});

// Endpoint to download files
app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", filename); // Correct the file path to point to the uploads directory

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.download(filePath, filename, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send("Error sending file");
      }
    });
  } else {
    res.status(404).send("File not found");
  }
});

//creating exam
app.post("/create-exam", (req, res) => {
  const {
    subject_name,
    exam_title,
    exam_date,
    start_time,
    end_time,
    total_marks,
    csv_upload_path,
    created_at,
    status,
    number_of_questions,
  } = req.body;

  connection.query(
    "INSERT INTO exam (subject_name, exam_title, exam_date, start_time, end_time, total_marks, csv_upload_path, created_at, status, number_of_questions) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      subject_name,
      exam_title,
      exam_date,
      start_time,
      end_time,
      total_marks,
      csv_upload_path,
      created_at,
      status,
      number_of_questions,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error creating the exam");
      }

      res.send("Exam created successfully");
    }
  );
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
