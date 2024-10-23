import React, { useState } from "react";
import "./component_styles/Login.css";
import Contained_Button from "./Contained_Button";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student"); // Default role
  const [photo, setPhoto] = useState(null); // State for photo verification

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here using the proctoring system database (API calls)
    console.log("Login data:", { email, password, role, photo });
  };

  const handlePhotoVerification = () => {
    // Implement the photo verification logic here
    console.log("Photo verification clicked");
    // You can add your logic to capture or upload a photo here
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>

          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <div className="button-row">
            <Contained_Button
              id="photo-button"
              label="Take Photo"
              onClick={handlePhotoVerification}
              style={{ width: "45%" }} // 45% width for the photo button
            />
            <Contained_Button
              label="Login"
              type="submit"
              onClick={handleLogin}
              style={{
                width: "55%",
              }}
            />
          </div>

          <div className="login-footer">
            <a href="/register">Register</a>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
