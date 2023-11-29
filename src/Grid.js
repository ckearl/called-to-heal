import React from "react";
import colors from "./constant";

const Box = ({ day, date }) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const dayOfMonth = date.slice(8, 10);
  const dayOfWeek = new Date(year, month - 1, dayOfMonth).getDay();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let bgColor = "white";
  if (date === new Date().toISOString().slice(0, 10)) {
    bgColor = colors.themeColors.primary + "40";
  }

  return (
    <div className="w-100 h-100 position-relative">
      <div className="position-absolute d-flex flex-column w-100 h-100 justify-content-center align-items-center lh-1 fw-bold fs-5">
        <div>{daysOfWeek[dayOfWeek]}</div>
        <div>{dayOfMonth}</div>
      </div>
      <div
        className="day rounded-3 p-1 m-1"
        style={{ height: 70, border: "1px solid black", backgroundColor: bgColor }}
      >
        <div className="d-flex justify-content-start align-items-baseline">
          <div
            id="anxious-dot"
            className="dot"
            style={{
              height: (day.anxious + 3) * 2,
              width: (day.anxious + 3) * 2,
              backgroundColor: colors.emotionColors.anxious,
            }}
          ></div>
        </div>
        <div className="d-flex justify-content-end align-items-baseline">
          <div
            id="tired-dot"
            className="dot"
            style={{
              height: (day.tired + 3) * 2,
              width: (day.tired + 3) * 2,
              backgroundColor: colors.emotionColors.tired,
            }}
          ></div>
        </div>
        <div className="d-flex justify-content-start align-items-end">
          <div
            id="angry-dot"
            className="dot"
            style={{
              height: (day.angry + 3) * 2,
              width: (day.angry + 3) * 2,
              backgroundColor: colors.emotionColors.angry,
            }}
          ></div>
        </div>
        <div className="d-flex justify-content-end align-items-end">
          <div
            id="sad-dot"
            className="dot"
            style={{
              height: (day.sad + 3) * 2,
              width: (day.sad + 3) * 2,
              backgroundColor: colors.emotionColors.sad,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ user, setUser }) => {
  // next task: display calendar of bad d-flex justify-content-start align-items-baselines and make the line graph
  return (
    <div className="container">
      <div>Mood Calendar</div>
      {Object.keys(user.grid.days).length !== 0 ? (
        <div className="grid-7">
          {Object.keys(user.grid.days)
            .slice(-25)
            .map((day) => {
              return <Box key={day} day={user.grid.days[day]} date={day} />;
            })}
        </div>
      ) : (
        <h3 className="text-center"> Record how you are feeling on the home page</h3>
      )}
    </div>
  );
};

export default Grid;
