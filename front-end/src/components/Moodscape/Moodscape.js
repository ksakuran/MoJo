import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { appContext } from "../../providers/AppProvider";
import "../../styles/Moodscape.scss";
import classNames from "classnames";
import DateSelectionForm from "./DateSelectionForm";
import Button from "../Common/Button";
import DoughnutChart from "./DoughnutChart";
import { Chart } from "chart.js/auto";
import getCurrentDate from "../../helpers/moodscape_date";
import { summaryContext } from "../../providers/SummaryProvider";
import { getDonutChartData } from "../../helpers/mood_summary";

const Moodscape = (props) => {
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
        ],
        borderColor: [
          "#FFEB3B", // happy - yellow
          "#FF9800", // grateful - orange
          "#FF5722", // excited - deep orange
          "#F44336", // confident - red
          "#E91E63", // motivated - pink
          "#9C27B0", // neutral - purple
          "#673AB7", // relaxed - deep purple
          "#3F51B5", // tired - indigo
          "#2196F3", // uncertain - blue
          "#03A9F4", // bored - light blue
          "#00BCD4", // sad - cyan
          "#009688", // stressed - teal
          "#4CAF50", // anxious - green
          "#8BC34A", // angry - lime green
          "#CDDC39", // depressed - yellow-green
        ],
        backgroundColor: [
          "#FFEB3B", // happy - yellow
          "#FF9800", // grateful - orange
          "#FF5722", // excited - deep orange
          "#F44336", // confident - red
          "#E91E63", // motivated - pink
          "#9C27B0", // neutral - purple
          "#673AB7", // relaxed - deep purple
          "#3F51B5", // tired - indigo
          "#2196F3", // uncertain - blue
          "#03A9F4", // bored - light blue
          "#00BCD4", // sad - cyan
          "#009688", // stressed - teal
          "#4CAF50", // anxious - green
          "#8BC34A", // angry - lime green
          "#CDDC39", // depressed - yellow-green
        ],
        borderWidth: 3,
      },
    ],
  };

  const { userId } = useContext(appContext);
  const { updateDates, selectedStartDate, selectedEndDate } =
    useContext(summaryContext);

  const moodscapeClass = classNames("moodscape-page");

  const [showForm, setShowForm] = useState(false);
  const [chartData, setChartData] = useState(donutChartData);

  const currentDate = getCurrentDate();

  useEffect(() => {
    let startDate = selectedStartDate ? selectedStartDate : currentDate;
    let endDate = selectedEndDate ? selectedEndDate : currentDate;
    // console.log("COFFEE CUP");
    axios
      .get(`/api/moodscape/summary/${startDate}/${endDate}/${userId}`)
      .then((results) => {
        setChartData(getDonutChartData(results.data));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [updateDates]);

  const clickShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className={moodscapeClass}>
      <div id="chart-p">
        <p>summary of your mood selections</p>
        <DoughnutChart
          start={selectedStartDate}
          end={selectedEndDate}
          chartData={chartData}
        />
      </div>
      <div className={moodscapeClass}>
        <Button btnId={moodscapeClass} onClickHandler={clickShowForm}>
          select date range
        </Button>
        {showForm && <DateSelectionForm />}
      </div>
    </section>
  );
};

export default Moodscape;
