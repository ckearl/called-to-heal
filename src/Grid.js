import React, { useContext, useState } from "react";
import constants from "./constant";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./components/LineChart.js";
import { UserContext } from "./UserContext";

Chart.register(CategoryScale);

const Grid = ({ user, setUser }) => {
  const labelDays = Object.keys(user.grid.days).slice(-10);
  // map through the days and return the value of each value of anxious, sad, angry, and tired
  const anxious = Object.values(user.grid.days)
    .slice(-10)
    .map((day) => day.anxious);
  const sad = Object.values(user.grid.days)
    .slice(-10)
    .map((day) => day.sad);
  const angry = Object.values(user.grid.days)
    .slice(-10)
    .map((day) => day.angry);
  const tired = Object.values(user.grid.days)
    .slice(-10)
    .map((day) => day.tired);

  const [chartData, setChartData] = useState({
    // past ten days
    labels: labelDays,
    datasets: [
      {
        label: "Anxious",
        data: anxious,
        fill: false,
        borderColor: [constants.emotionColors.anxiousRGB],
        borderWidth: 3,
        tension: 0.1,
      },
      {
        label: "Tired",
        data: tired,
        borderColor: [constants.emotionColors.tiredRGB],
        borderWidth: 3,
        tension: 0.1,
      },
      {
        label: "Sad",
        data: sad,
        borderColor: [constants.emotionColors.sadRGB],
        borderWidth: 3,
        tension: 0.1,
      },
      {
        label: "Angry",
        data: angry,
        borderColor: [constants.emotionColors.angryRGB],
        borderWidth: 3,
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
