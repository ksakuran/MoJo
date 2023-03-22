import React, { useState } from "react";
import "../../styles/Moodscape.scss";
import classNames from "classnames";
import DateSelectionForm from "./DateSelectionForm";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import DoughnutChart from "./DoughnutChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Moodscape = (props) => {
  const moodscapeClass = classNames("moodscape-page");

  const [showForm, setShowForm] = useState(false);

  const clickShowForm = () => {
    setShowForm(!showForm);
  };

  const donutChartData = {
    labels: ["Happy", "Tired", "Sad", "Anxious", "Relaxed"],
    datasets: [
      {
        label: [],
        data: [6, 7, 3, 4, 2],
        borderColor: ["green", "purple", "blue", "red", "lightblue"],
        backgroundColor: ["green", "purple", "blue", "red", "lightblue"],
        borderWidth: 3,
      },
    ],
  };

  return (
    <section className={moodscapeClass}>
      <button onClick={clickShowForm}>select date range</button>
      {showForm && <DateSelectionForm />}
      <DoughnutChart chartData={donutChartData} />
    </section>
  );
};

export default Moodscape;
