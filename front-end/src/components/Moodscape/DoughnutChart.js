import React from "react";
import './../../styles/DoughnutChart.scss'
import { Doughnut } from "react-chartjs-2";


const DoughnutChart = (props) => {
  return (
      <Doughnut
        data={props.chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Moodscape",
            },
            legend: {
              display: true,
            },
          },
        }}
      />
  );
};

export default DoughnutChart;

