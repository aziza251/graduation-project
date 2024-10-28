import React from "react";
import "./component_styles/Header.css";
import Login from "./Login";
import Register from "./Register";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="header">
      <a href="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/tr/b/ba/%C3%9Csk%C3%BCdar_%C3%9Cniversitesi_logo.png"
          alt="header_logo"
        />
      </a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "500px",
          padding: "10px",
        }}
      >
        <a href="https://www.instagram.com/uskudaruni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <InstagramIcon
            style={{
              color: "white", // Change icon color
              fontSize: "30px", // Adjust size as needed
              marginLeft: "0", // Add some space between logo and icon
              marginTop: "20px", // Align with the logo vertically
            }}
          />
        </a>
        <a href="https://www.facebook.com/uskudaruniversity">
          <FacebookIcon
            style={{
              color: "white", // Change icon color
              fontSize: "30px", // Adjust size as needed
              // Add some space between logo and icon
              marginTop: "20px", // Align with the logo vertically
            }}
          />
        </a>

        <a href="https://twitter.com/uskudaruni">
          <TwitterIcon
            style={{
              color: "white", // Change icon color
              fontSize: "30px", // Adjust size as needed
              marginLeft: "0", // Add some space between logo and icon
              marginTop: "20px", // Align with the logo vertically
            }}
          />
        </a>
        <a href="tel:+902164444444">
          <LocalPhoneIcon
            style={{
              color: "white", // Change icon color
              fontSize: "30px", // Adjust size as needed
              marginLeft: "0", // Add some space between logo and icon
              marginTop: "20px", // Align with the logo vertically
            }}
          />
        </a>
      </div>
      {/* Icons on the right */}
      <div className="header__icons">
        <a href="/register">
          <FaUserPlus
            className="icon"
            style={{ height: "45px", width: "45px" }}
          />
        </a>
        <a href="/login">
          <FaSignInAlt
            className="icon"
            style={{ height: "45px", width: "45px" }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
