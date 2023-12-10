import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  return (
    <div className="grid-line-graph">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Daily Check-in for the past 10 days",
            },
            legend: {
              display: true,
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default LineChart;
