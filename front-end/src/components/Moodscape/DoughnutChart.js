import React from "react";
import './../../styles/DoughnutChart.scss'
import { Doughnut } from "react-chartjs-2";


const DoughnutChart = (props) => {
  let titleDates = ''
  if(props.start && props.end) {
    titleDates = `from ${props.start} to ${props.end}`
  }

  return (
      
    <div className="chart">
      <Doughnut
        data={props.chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            title: {
              position: "top",
              align: "end",
              display: true,
              padding: 1,
              text: `your moodscape`,
              color: "white",
              font: {
                family: "Syne",
                size: "22vw",
                weight: 400,
              }
            },
            subtitle: {
              position: "top",
              align: "end",
              display: true,
              
              text: `${titleDates}`,
              color: "white",
              font: {
                family: "Syne",
                size: "16vw",
              }
            },
            legend: {
              display: true,
              position: "left",
              titleFont: {
                family: "Syne",
                color: "white"
              },
              labels: {
                padding: 10,
                boxWidth: 13,
                color: "white",
                font: {
                  family: "Syne",
                  size: "12vw"
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

