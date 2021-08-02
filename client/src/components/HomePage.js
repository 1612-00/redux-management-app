import React from "react";
import NavbarMenu from "./NavbarMenu";
import "./css/homePage.css";

const HomePage = () => {
  return (
    <div>
      <NavbarMenu />
      <div className="home_page">
        <div className="content_container">
          <div className="content_wrapper">
            <button className="home_btn">Todo list</button>
            <button className="home_btn">Novel management</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
