import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SisterProfileIcon from "../src/lib/img/sister-profile.png";
import ElderProfileIcon from "../src/lib/img/elder-profile.png";
// import { icon } from "@fortawesome/fontawesome-svg-core";
import colors from "./constant";

// function rangeSlider(value) {
//   document.getElementById("rangevalue").innerHTML = value;
// }

function determineIconColor(icon) {
  const color = {
    anxious: colors.emotionColors.anxious,
    tired: colors.emotionColors.tired,
    sad: colors.emotionColors.sad,
    angry: colors.emotionColors.angry,
  };
  return color[icon];
}

function IconBuilder(icon) {
  let iconName = icon;
  if (icon === "sad") {
    iconName = "sad-tear";
  }
  if (icon === "anxious") {
    iconName = "flushed";
  }

  const [sliderValue, setSliderValue] = useState();

  const sliderHandler = (event) => {
    event.preventDefault();
    setSliderValue(event.target.value);
  };

  return (
    <div className="col-6 p-1">
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          icon={["fas", iconName]}
          style={{ height: 45, width: 45, color: determineIconColor(icon) }}
        />
        <div className="ps-3">
          <div className="slider position-relative">
            <input
              type="range"
              className={`${icon}-slider`}
              min="0"
              max="10"
              onChange={sliderHandler}
              style={{ backgroundColor: determineIconColor(icon) }}
            />
            <div className="text-center w-100 position-absolute">
              {sliderValue ? sliderValue : "0"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = ({ user, setUser, currentPage, onPageChange }) => {
  const pageChangeHandler = () => {
    onPageChange("Settings");
  };

  const moodFormHandler = (event) => {
    event.preventDefault();
    const anxious = event.target[0].value;
    const tired = event.target[1].value;
    const sad = event.target[2].value;
    const angry = event.target[3].value;
    const newGridEntry = {
      anxious: parseInt(anxious),
      tired: parseInt(tired),
      sad: parseInt(sad),
      angry: parseInt(angry),
    };

    setUser({
      ...user,
      grid: {
        ...user.grid,
        days: {
          ...user.grid.days,
          [new Date().toISOString().slice(0, 10)]: newGridEntry,
        },
      },
    });
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
        <form onSubmit={moodFormHandler}>
          <div className="row">
            {IconBuilder("anxious")}
            {IconBuilder("tired")}
            {IconBuilder("sad")}
            {IconBuilder("angry")}
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Home;
