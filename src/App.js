import React from "react";
import "./App.css";
import guy from "./img/home-right.png";

function App() {
  return (
    <div class="home_page">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="banner_content">
              <h3 class="text-uppercase">Hello</h3>
              <h1 class="text-uppercase">I am Karthik</h1>
              <h5 class="text-uppercase">a software developer</h5>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="home_right_img">
              <img class="" src={guy} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
