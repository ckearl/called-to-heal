import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SisterProfileIcon from "../src/lib/img/sister-profile.png";
import ElderProfileIcon from "../src/lib/img/elder-profile.png";
import colors from "./constant";

const appUsage = [
  {
    appName: "Meditation Coach",
    iconName: "meditation",
    lastUsed: "2021-06-01",
    totalTime: "00:00:00",
    numberOfUses: 0,
  },
  {
    appName: "Notepad",
    iconName: "sticky-note",
    lastUsed: "2021-06-01",
    totalTime: "00:00:00",
    numberOfUses: 0,
  },
  {
    appName: "Media Player",
    iconName: "clapperboard",
    lastUsed: "2021-06-01",
    totalTime: "00:00:00",
    numberOfUses: 0,
  },
];

function introTopHeader(user, pageChangeHandler) {
  return (
    <div className="d-flex">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-4 text-center">
            <img
              src={user.sex === "m" ? ElderProfileIcon : SisterProfileIcon}
              alt=""
              className=""
              onClick={pageChangeHandler}
            />
          </div>
          <div className="col-8 text-left">
            <h1>
              Hi, {user.sex === "m" ? "Elder" : "Sister"} {user.lastName}!
            </h1>
            <h4>{user.mission} Mission</h4>
            <h6>Serving Since {user.dateStarted}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function recentlyVisited(user, appUsage) {
  return (
    <section class="r-v-slider mt-3 ms-1 me-1">
      <h3>Recently Visited</h3>
      <div class="slideshow">
        <div class="sliderImage r-v-slide-1">
          {recentlyVisitedCardBuilder(user, appUsage)}
        </div>
        <div class="sliderImage r-v-slide-2">
          {recentlyVisitedCardBuilder(user, appUsage)}
        </div>
        <div class="sliderImage r-v-slide-3">
          {recentlyVisitedCardBuilder(user, appUsage)}
        </div>
      </div>
    </section>
  );
}

function quoteOfTheDay() {
  return (
    <section class="q-o-t-d mt-3 ms-1 me-1">
      <h3>Quote of the Day</h3>
      <div class="q-o-t-d-content">
        <p>
          "The Lord is my light and my salvation; whom shall I fear? the Lord is
          the strength of my life; of whom shall I be afraid?" - Psalms 27:1
        </p>
      </div>
    </section>
  );
}

function recentlyVisitedCardBuilder(user, appUsage) {
  return (
    <div>
      <h2>App Name: {appUsage.appName}</h2>
    </div>
  );
}

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

  const [rangeValue, setRangeValue] = useState();

  const rangeHandler = (event) => {
    event.preventDefault();
    setRangeValue(event.target.value);
  };

  return (
    <div className="col-6 p-1">
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          icon={["fas", iconName]}
          style={{ height: 45, width: 45, color: determineIconColor(icon) }}
        />
        <div className="ps-3">
          <div className="range position-relative">
            <input
              type="range"
              className={`${icon}-range`}
              min="0"
              max="10"
              onChange={rangeHandler}
              style={{ backgroundColor: determineIconColor(icon) }}
            />
            <div className="text-center w-100 position-absolute">
              {rangeValue ? rangeValue : "10"}
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
      {introTopHeader(user, pageChangeHandler)}
      <div className="container mt-3">
        <h2 className="text-left">Daily Check-in</h2>
        <form onSubmit={moodFormHandler}>
          <div className="row">
            {IconBuilder("anxious")}
            {IconBuilder("tired")}
            {IconBuilder("sad")}
            {IconBuilder("angry")}
          </div>
          <div className="d-flex justify-content-center p-2">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
      {recentlyVisited(user, appUsage)}
      {quoteOfTheDay()}
    </div>
  );
};

export default Home;
