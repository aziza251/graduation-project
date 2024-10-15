import React from "react";
import "./page_styles/Content.css";

const Content_Page = () => {
  return (
    <div className="content-image-container">
      <div className="left-content">
        <h1>Left Content Title</h1>
        <p>
          This is the left content section. You can add any information related
          to your university or any other topic here. Make sure to keep it
          informative and engaging for the audience.
        </p>
        <img
          src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Smiling_grande.png?v=1571606089"
          alt="emoji"
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "160px",
            marginTop: "10px",
          }}
        />
      </div>

      <div className="image-section">
        <img
          src="https://cdn.uskudar.edu.tr/uploads/images/2018/07/25/800/img-2151.JPG" // Add your image URL here
          alt="University photo"
          className="center-image"
        />
      </div>

      <div className="right-content">
        <h1>Right Content Title</h1>
        <p>
          This is the right content section. Similar to the left content, this
          section can also provide additional insights and information about
          your topic or university.
        </p>
        <img
          src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093"
          alt="emoji"
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "160px",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Content_Page;
