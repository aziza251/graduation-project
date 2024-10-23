import React from "react";
import "./component_styles/Register.css";
import Contained_Button from "./Contained_Button";
import Header from "./Header";

function Register() {
  const handleTakePhoto = () => {
    console.log("Take photo");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submit
    console.log("Submitted successfully!");
  };

  return (
    <>
      <Header />

      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>

          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="first_Name">First Name</label>
              <input type="text" id="first_Name" name="first_Name" required />

              <label htmlFor="date_of_birth">Date of Birth</label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="role">Choose your role</label>
              <select id="role" name="role" required>
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <div className="form-column">
              <label htmlFor="last_Name">Last Name</label>
              <input type="text" id="last_Name" name="last_Name" required />

              <label htmlFor="identity_number">Identity Number</label>
              <input
                type="text"
                id="identity_number"
                name="identity_number"
                required
              />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

              <label htmlFor="photo">Photo Verification</label>
              <Contained_Button label="Take Photo" onClick={handleTakePhoto} />
            </div>
          </div>

          <div className="button-container">
            <Contained_Button label="Register" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
