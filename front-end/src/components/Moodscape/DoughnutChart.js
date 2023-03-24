import React from "react";
import './../../styles/DoughnutChart.scss'
import { Doughnut } from "react-chartjs-2";


const DoughnutChart = (props) => {
  return (
    <div className="chart">
      <Doughnut
        data={props.chartData}
        options={{
          
          plugins: {
            title: {
              position: "top",
              align: "start",
              display: true,
              padding: -15,
              text: "your moodscape",
              color: "white",
              font: {
                family: "Syne",
                size: "45px",
              }
            },
            legend: {
              display: true,
              padding: 20,
              useBorderRadius: true,
              borderRadius: 25,
              position: "left",
              titleFont: {
                family: "Syne",
                color: "white"
              },
              labels: {
                color: "white",
                font: {
                  family: "Syne",
                  size: "20px"
                },
                tooltip: {
                  bodyFont: {
                    family: "Syne",
                    color: "white"
                  },
                  
                },
              }
            },
          },
        }}
      />
      </div>
  );
};

export default DoughnutChart;

