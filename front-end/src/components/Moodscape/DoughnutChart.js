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
              align: "start",
              display: true,
              padding: -5,
              text: `your moodscape`,
              color: "white",
              font: {
                family: "Syne",
                size: "35px",
                weight: 400,
              }
            },
            subtitle: {
              position: "top",
              align: "start",
              display: true,
              
              text: `${titleDates}`,
              color: "white",
              font: {
                family: "Syne",
                size: "25px",
              }
            },
            legend: {
              display: true,
              padding: 20,
              useBorderRadius: true,
              borderRadius: 25,
              boxWidth: 10,
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

