import React from "react";
import "./component_styles/Register.css";

function Register() {
  return (
    <div className="register-container">
      <form>
        <h1>Register</h1>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="first_Name">First Name</label>
            <input type="text" id="first_Name" name="first_Name" required />
          </div>
          <div className="form-column">
            <label htmlFor="last_Name">Last Name</label>
            <input type="text" id="last_Name" name="last_Name" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
            />
          </div>
          <div className="form-column">
            <label htmlFor="identity_number">Identity Number</label>
            <input
              type="text"
              id="identity_number"
              name="identity_number"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-column">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label for="role">Choose your role</label>
            <select id="role" name="role" required>
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className="form-column photo-column">
            <label for="photo">Photo Verification</label>
            <button type="button" id="photo" name="photo">
              Take a photo
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="button-container">
            <button type="submit" id="submit" name="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
