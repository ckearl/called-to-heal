import React from "react";
import { Line } from "react-chartjs-2";

// const data = {
//         labels: ['Red', 'Orange', 'Blue'],
//         // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
//         datasets: [
//             {
//               label: 'Popularity of colours'
//               data: [55, 23, 96],
//               // you can set indiviual colors for each bar
//               backgroundColor: [
//                 'rgba(255, 255, 255, 0.6)'
//                 'rgba(255, 255, 255, 0.6)'
//                 'rgba(255, 255, 255, 0.6)'
//               ],
//               borderWidth: 1,
//             }
//         ]
// }

function LineChart({ gridData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={gridData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
