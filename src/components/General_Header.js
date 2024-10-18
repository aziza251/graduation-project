import React from "react";
import "./component_styles/Header.css";

const General_Header = () => {
  return (
    <nav className="header">
      <a>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/tr/b/ba/%C3%9Csk%C3%BCdar_%C3%9Cniversitesi_logo.png"
          alt="header_logo"
          style={{
            width: "80px",
            height: "80px",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        />
      </a>

      {/* Icons on the right */}
      <div className="header__icons">
        <a href="">Log out</a>
      </div>
    </nav>
  );
};

export default General_Header;
