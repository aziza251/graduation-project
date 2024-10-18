import React, { useState } from "react";
import "./component_styles/Login.css";

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
        <div className="input-container">
          <label htmlFor="photo">Photo Verification:</label>
          <button type="button" id="photo" onClick={handlePhotoVerification}>
            Take Photo
          </button>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        <div className="login-footer">
          <a href="/signup">Sign Up</a>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
