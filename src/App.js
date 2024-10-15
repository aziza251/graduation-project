import React from "react";
import Header from "./components/Header";
import "./components/component_styles/Header.css";
import Login from "./components/Login";
import "./components/component_styles/Login.css";
import Home_Page from "./pages/Home_Page";
import "./pages/page_styles/Home_Page.css";
import About_Page from "./pages/About_Page";
import "./pages/page_styles/About.css";
import Content_Page from "./pages/Content_Page";
import "./pages/page_styles/Content.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home_Page />
      <Content_Page />
      <About_Page />

      <Login />
    </div>
  );
}

export default App;
