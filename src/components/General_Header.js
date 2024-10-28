import React from "react";
import "./component_styles/General_Header.css";
import {
  FaSignOutAlt, // For "View Exam History"
  FaBell,
} from "react-icons/fa";

const General_Header = () => {
  return (
    <nav className="header">
      <a>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/tr/b/ba/%C3%9Csk%C3%BCdar_%C3%9Cniversitesi_logo.png"
          alt="header_logo"
        />
      </a>

      {/* Icons on the right */}
      <div className="header__icons">
        <a href="">
          <FaBell className="icon" style={{ height: "40px", width: "40px" }} />
        </a>
        <a href="/">
          <FaSignOutAlt
            className="icon"
            style={{ height: "45px", width: "45px" }}
          />
        </a>
      </div>
    </nav>
  );
};

export default General_Header;
