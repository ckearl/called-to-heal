import React from "react";
import emotionColors from "./constant";

const Box = ({ day }) => {
  const mood = day.mood;
  let color = null;
  if (mood === "happy") {
    color = "yellow";
  } else if (mood === "sad") {
    color = "blue";
  } else if (mood === "mad") {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <div className="w-100 h-100" style={{ backgroundColor: color, height: 30 }}>
      &nbsp;
    </div>
  );
};

const Grid = ({ user, setUser }) => {
  return (
    <div className="container">
      <div>Your Mood Calendar</div>
      <div className="grid-7"></div>
      {user.grid.days["2021-06-02"].sad}
    </div>
  );
};

export default Grid;
