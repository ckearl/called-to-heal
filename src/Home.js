import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SisterProfileIcon from "../src/lib/img/sister-profile.png";
import ElderProfileIcon from "../src/lib/img/elder-profile.png";
import constants from "./constant";
import seedrandom from "seedrandom";

const appUsage = [
  {
    appName: "Meditation Coach",
    iconName: "leaf",
    lastUsed: "2023-06-01",
    totalTime: "03:12:29",
    numberOfUses: 8,
    bgColor: "#BCE48B",
  },
  {
    appName: "Notepad",
    iconName: "sticky-note",
    lastUsed: "2023-12-01",
    totalTime: "00:12:32",
    numberOfUses: 3,
    bgColor: "#FFD35C",
  },
  {
    appName: "Media Player",
    iconName: "clapperboard",
    lastUsed: "2023-10-31",
    totalTime: "04:23:56",
    numberOfUses: 6,
    bgColor: "#2E1E0F",
  },
];

function introTopHeader(user, pageChangeHandler) {
  return (
    <div className="d-flex text-light">
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
    <div>
      <h3 className="w-100 mt-3 ms-1 text-light">Recently Visited</h3>
      <section className="r-v-slider mt-1 ms-1 me-1 border border-primary rounded">
        <div className="slideshow">
          {appUsage.map((app) => {
            return (
              <div
                key={app.appName}
                className="sliderImage bg-light"
                // style={{ backgroundColor: app.bgColor }}
              >
                {recentlyVisitedCardBuilder(user, app)}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function recentlyVisitedCardBuilder(user, appUsage) {
  return (
    <div className="w-100 ps-2">
      <h2>App Name: {appUsage.appName}</h2>
      <FontAwesomeIcon
        icon={["fas", appUsage.iconName]}
        style={{
          height: 45,
          width: 45,
          color: appUsage.bgColor,
        }}
      />
      <h2>Last Used: {appUsage.lastUsed}</h2>
      <h2>Total Time: {appUsage.totalTime}</h2>
      <h2>Number of Uses: {appUsage.numberOfUses}</h2>
    </div>
  );
}

function quoteOfTheDay() {
  let quoteOfTheDay = pickRandomQuote();
  return (
    <div className="ms-1 mb-5">
      <h3 className="mt-3 text-light">Quote of the Day</h3>
      <section className="q-o-t-d me-1 mb-5 border border-primary rounded bg-light">
        <div className="q-o-t-d-content">
          <div className="q-o-t-d-quote">{quoteOfTheDay[0].quote}</div>
          <div className="q-o-t-d-speaker fw-bolder text-end">
            {quoteOfTheDay[0].speaker}
          </div>
          <div className="q-o-t-d-location fw-bolder text-end">
            {quoteOfTheDay[0].location}
          </div>
        </div>
      </section>
    </div>
  );
}

function pickRandomQuote() {
  const rng = seedrandom(new Date().toDateString());
  const randomIndex = Math.floor(rng() * constants.dailyQuotes.length);
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
    <div className="bg-primary bg-opacity-75">
      {introTopHeader(user, pageChangeHandler)}
      <div className="mt-3 w-100">
        <h2 className="text-start text-light ms-1 me-1">Daily Check-in</h2>
        <section className="ms-1 me-1 p-1 border border-primary rounded bg-light">
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
        </section>
      </div>
      {recentlyVisited(user, appUsage)}
      {quoteOfTheDay()}
    </div>
  );
};

export default Home;
