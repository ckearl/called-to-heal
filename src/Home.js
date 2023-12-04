import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SisterProfileIcon from "../src/lib/img/sister-profile.png";
import ElderProfileIcon from "../src/lib/img/elder-profile.png";
import constants from "./constant";
import seedrandom from "seedrandom";

const appUsage = [
  {
    appName: "Meditation Coach",
    iconName: "meditation",
    lastUsed: "2021-06-01",
    totalTime: "00:00:00",
    numberOfUses: 0,
    bgColor: "#D1313D",
  },
  {
    appName: "Notepad",
    iconName: "sticky-note",
    lastUsed: "2021-06-01",
    totalTime: "00:00:00",
    numberOfUses: 0,
    bgColor: "#E6625D",
  },
  {
    appName: "Media Player",
    iconName: "clapperboard",
    lastUsed: "2021-06-01",
    totalTime: "00:00:00",
    numberOfUses: 0,
    bgColor: "#F9BF76",
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
          <div className="col-8 text-start">
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
    <section className="r-v-slider mt-3 ms-1 me-1">
      <h3>Recently Visited</h3>
      <div className="slideshow">
        {appUsage.map((app) => {
          return (
            <div key={app.appName} className="sliderImage" style={{ backgroundColor: app.bgColor }}>
              {recentlyVisitedCardBuilder(user, app)}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function recentlyVisitedCardBuilder(user, appUsage) {
  return (
    <div>
      <h2>App Name: {appUsage.appName}</h2>
      <h2>Icon Name: {appUsage.iconName}</h2>
      <h2>Last Used: {appUsage.lastUsed}</h2>
      <h2>Total Time: {appUsage.totalTime}</h2>
      <h2>Number of Uses: {appUsage.numberOfUses}</h2>
    </div>
  );
}

function quoteOfTheDay() {
  let quoteOfTheDay = pickRandomQuote();
  return (
    <section className="q-o-t-d mt-3 ms-1 me-1">
      <h3>Quote of the Day</h3>
      <div className="q-o-t-d-content">
        <div className="q-o-t-d-quote">{quoteOfTheDay[0].quote}</div>
        <div className="q-o-t-d-speaker fw-bolder text-end">{quoteOfTheDay[0].speaker}</div>
        <div className="q-o-t-d-location fw-bolder text-end">{quoteOfTheDay[0].location}</div>
      </div>
    </section>
  );
}

function pickRandomQuote() {
  const rng = seedrandom(new Date().toDateString());
  const randomIndex = Math.floor(rng() * constants.dailyQuotes.length);
  // console.log(constants.dailyQuotes[randomIndex]);
  let quote = constants.dailyQuotes[randomIndex];
  let speaker = constants.dailyQuotes[1][randomIndex];
  let location = constants.dailyQuotes[1][randomIndex];
  return [quote, speaker, location];
}

function determineIconColor(icon) {
  const color = {
    anxious: constants.emotionColors.anxious,
    tired: constants.emotionColors.tired,
    sad: constants.emotionColors.sad,
    angry: constants.emotionColors.angry,
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
    <div className="">
      {introTopHeader(user, pageChangeHandler)}
      <div className="container mt-3">
        <h2 className="text-start">Daily Check-in</h2>
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
