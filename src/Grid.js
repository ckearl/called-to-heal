import React, { useContext, useState } from "react";
import constants from "./constant";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./components/LineChart.js";
import { UserContext } from "./UserContext";

Chart.register(CategoryScale);

const Grid = ({ user, setUser }) => {
  const userContext = useContext(UserContext);
  const days = Object.keys(userContext.users[0].grid.days);
  // map through the days and return the value of each value of anxious
  const anxious = Object.values(userContext.users[0].grid.days).map(
    (day) => day.anxious
  );
  const sad = Object.values(userContext.users[0].grid.days).map(
    (day) => day.sad
  );
  const angry = Object.values(userContext.users[0].grid.days).map(
    (day) => day.angry
  );
  const tired = Object.values(userContext.users[0].grid.days).map(
    (day) => day.tired
  );

  // .grid.days;
  console.log(days);
  const [chartData, setChartData] = useState({
    labels: days,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Anxious",
        data: anxious,
        backgroundColor: [constants.emotionColors.anxiousRGB],
        borderWidth: 1,
      },
      {
        label: "Tired",
        data: tired,
        backgroundColor: [constants.emotionColors.tiredRGB],
        borderWidth: 1,
      },
      {
        label: "Sad",
        data: sad,
        backgroundColor: [constants.emotionColors.sadRGB],
        borderWidth: 1,
      },
      {
        label: "Angry",
        data: angry,
        backgroundColor: [constants.emotionColors.angryRGB],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
};

export default Grid;
