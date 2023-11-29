import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SisterProfileIcon from "../src/lib/img/sister-profile.png";
import ElderProfileIcon from "../src/lib/img/elder-profile.png";
import { icon } from "@fortawesome/fontawesome-svg-core";
import emotionColors from "./constant";

function rangeSlider(value) {
  document.getElementById("rangevalue").innerHTML = value;
}

function determineIconColor(icon) {
  const colors = {
    flushed: emotionColors.flushed,
    tired: emotionColors.tired,
    sadness: emotionColors.sadness,
    angry: emotionColors.angry,
  };
  return colors[icon];
}

function IconBuilder(icon) {
  if (icon === "sadness") {
    icon = "sad-tear";
  }

  const [sliderValue, setSliderValue] = useState();

  const sliderHandler = (event) => {
    event.preventDefault();
    setSliderValue(event.target.value);
  };

  return (
    <div className="col-6">
      <FontAwesomeIcon
        icon={["fas", icon]}
        style={{ height: 45, width: 45, color: determineIconColor(icon) }}
      />
      {/* onChange={this.onSelectFile} */}
      <div className="slider">
        <input
          type="range"
          className={`${icon}-slider`}
          min="0"
          max="10"
          onChange={sliderHandler}
          style={{ backgroundColor: determineIconColor(icon) }}
        />
        <output id="rangevalue">{sliderValue}</output>
      </div>
    </div>
  );
}

const Home = ({ user, setUser, currentPage, onPageChange }) => {
  const pageChangeHandler = () => {
    onPageChange("Settings");
  };
  return (
    <div>
      <div className="d-flex">
        <div className="container">
          <div className="row">
            <img
              src={user.sex === "m" ? ElderProfileIcon : SisterProfileIcon}
              alt=""
              className="me-2 col-3"
              onClick={pageChangeHandler}
            />
            <h1 className="text-center">
              Hi, {user.sex === "m" ? "Elder" : "Sister"} {user.lastName}!
            </h1>
            <h4>{user.mission} Mission</h4>
            <h6>Serving Since {user.dateStarted}</h6>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {IconBuilder("flushed")}
          {IconBuilder("tired")}
          {IconBuilder("sadness")}
          {IconBuilder("angry")}
        </div>
      </div>
    </div>
  );
};

export default Home;
