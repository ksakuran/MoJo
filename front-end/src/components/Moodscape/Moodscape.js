import React, { useState } from "react";
import "../../styles/Moodscape.scss";
import classNames from "classnames";
import DateSelectionForm from "./DateSelectionForm";

import { Chart } from "chart.js/auto";
import DoughnutChart from "./DoughnutChart";



const Moodscape = (props) => {
  const moodscapeClass = classNames("moodscape-page");

  const [showForm, setShowForm] = useState(false);

  const clickShowForm = () => {
    setShowForm(!showForm);
  };

  const donutChartData = {
    labels: [
      "happy",
      "grateful",
      "excited",
      "confident",
      "motivated",
      "neutral",
      "relaxed",
      "tired",
      "uncertain",
      "bored",
      "sad",
      "stressed",
      "anxious",
      "angry",
      "depressed",
    ],
    datasets: [
      {
        label: [],
        data: [
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
          "2",
        ],
        borderColor: [
          "#FFDD47",
          "#B35681",
          "#C1FBA4",
          "#FEA971",
          "#81EED8",
          "#CBD0C8",
          "#B298DC",
          "#391763",
          "#496629",
          "#5F0F40",
          "#224E6D",
          "#DA4B1B",
          "#CE6BEF",
          "#981F2F",
          "#454E9E",
        ],
        backgroundColor: [
          "#FFDD47",
          "#B35681",
          "#C1FBA4",
          "#FEA971",
          "#81EED8",
          "#CBD0C8",
          "#B298DC",
          "#391763",
          "#496629",
          "#5F0F40",
          "#224E6D",
          "#DA4B1B",
          "#CE6BEF",
          "#981F2F",
          "#454E9E",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <section className={moodscapeClass}>
      <button className={moodscapeClass} onClick={clickShowForm}>select date range</button>
      {showForm && <DateSelectionForm />}
      <DoughnutChart chartData={donutChartData} />
    </section>
  );
};

export default Moodscape;
