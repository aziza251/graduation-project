import React from "react";
import "./page_styles/Generate_Q_Manually.css";
import Contained_Button from "../components/Contained_Button";
import General_Header from "../components/General_Header";
import Teacher_Sidebar from "../components/Teacher_Sidebar";

function Save_Button_Clicked() {
  const handleCSV = (e) => {
    console.log("Saved as CSV");
  };

  const handlePDF = (e) => {
    console.log("Saved as PDF");
  };

  return (
    <>
      <General_Header />
      <Teacher_Sidebar />
      <div className="generate-questions-container">
        <h2>Generated Questions</h2>
        //fetch the generated questions from database //
        <form>
          <div className="buttons-row">
            <div className="button-column">
              <Contained_Button label="Save as CSV" onClick={handleCSV} />
            </div>
            <div className="button-column">
              <Contained_Button label="Save as PDf" onClick={handlePDF} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Save_Button_Clicked;
