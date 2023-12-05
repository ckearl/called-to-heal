import React from "react";
import colors from "./constant";

const Box = ({ day, date, setSelectedDay }) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const dayOfMonth = date.slice(8, 10);
  const dayOfWeek = new Date(year, month - 1, dayOfMonth).getDay();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let bgColor = "white";
  if (date === new Date().toISOString().slice(0, 10)) {
    bgColor = colors.themeColors.primary + "40";
  }

  const changeSelectedDay = () => {
    setSelectedDay(date);
  };

  return (
    <div className="w-100 h-100 position-relative">
      <div
        className="position-absolute d-flex flex-column w-100 h-100 justify-content-center align-items-center lh-1 fw-bold fs-5"
        onClick={changeSelectedDay}
      >
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

const MoodDetails = ({ color, rating, mood }) => {
  const opacity = ((rating + 1) * 15).toString(16);
  return (
    <div className="w-50  p-3" style={{ backgroundColor: color + opacity, borderColor: color }}>
      <div className="text-center">{mood}</div>
      <div className="text-center">{rating}</div>
    </div>
  );
};

const DayDetails = ({ className, user, date }) => {
  const day = user.grid.days[date];
  return (
    <div className={className}>
      <div className="card">
        <div className="card-header text-center fs-5">{date}</div>
        <div className="card-body d-flex flex-wrap p-0">
          <MoodDetails color={colors.emotionColors.anxious} rating={day.anxious} mood={"Anxious"} />
          <MoodDetails color={colors.emotionColors.tired} rating={day.tired} mood={"Tired"} />
          <MoodDetails color={colors.emotionColors.angry} rating={day.angry} mood={"Angry"} />
          <MoodDetails color={colors.emotionColors.sad} rating={day.sad} mood={"Sad"} />
        </div>
      </div>
    </div>
  );
};
const KeyItem = ({ color, description }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div
          id="sad-dot"
          className="dot"
          style={{
            height: 20,
            width: 20,
            backgroundColor: color,
          }}
        ></div>
        <div className="ms-2">{description}</div>
      </div>
    </div>
  );
};

const Key = ({ className }) => {
  return (
    <div className={className}>
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <KeyItem color={colors.emotionColors.anxious} description="Anxious" />
          <KeyItem color={colors.emotionColors.tired} description="Tired" />
          <KeyItem color={colors.emotionColors.angry} description="Angry" />
          <KeyItem color={colors.emotionColors.sad} description="Sad" />
        </div>
      </div>
    </div>
  );
};

const Grid = ({ user, setUser }) => {
  // next task: display calendar of bad d-flex justify-content-start align-items-baselines and make the line graph
  const [selectedDay, setSelectedDay] = React.useState(Object.keys(user.grid.days)[0]);

  return (
    <div className="container">
      <h1 className="text-center m-3">Mood Calendar</h1>
      <Key className="mb-3" />

      {Object.keys(user.grid.days).length !== 0 ? (
        <div className="grid-7">
          {Object.keys(user.grid.days)
            .slice(-25)
            .map((day) => {
              return (
                <Box
                  key={day}
                  day={user.grid.days[day]}
                  date={day}
                  setSelectedDay={setSelectedDay}
                />
              );
            })}
        </div>
      ) : (
        <h3 className="text-center"> Record how you are feeling on the home page</h3>
      )}
      <DayDetails className="mt-3" user={user} date={selectedDay} />
    </div>
  );
};

export default Grid;
