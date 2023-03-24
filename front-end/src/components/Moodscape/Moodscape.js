import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { appContext } from "../../providers/AppProvider";
import "../../styles/Moodscape.scss";
import classNames from "classnames";
import DateSelectionForm from "./DateSelectionForm";
import Button from "../Common/Button";
import { Chart } from "chart.js/auto";
import DoughnutChart from "./DoughnutChart";
import getCurrentDate from "../../helpers/moodscape_date";
import { summaryContext } from "../../providers/SummaryProvider";
import { getDonutChartData } from "../../helpers/mood_summary"


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

  
  const { userId, setViewMode } = useContext(appContext);
  const { updateDates, selectedStartDate, selectedEndDate } = useContext(summaryContext)

  const moodscapeClass = classNames("moodscape-page");

  const [showForm, setShowForm] = useState(false);
  const [ chartData , setChartData ] = useState(donutChartData)
  
  const currentDate = getCurrentDate();

  useEffect(() => {
    
    let startDate = selectedStartDate ? selectedStartDate : currentDate;
    let endDate = selectedEndDate ? selectedEndDate : currentDate;
    console.log("COFFEE CUP")
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
      <div className={moodscapeClass}>
      <Button btnId={moodscapeClass} onClickHandler={clickShowForm}>select date range</Button>
      {showForm && <DateSelectionForm/>}
      </div>
      <DoughnutChart chartData={chartData} />
    </section>
  );
};

export default Moodscape;
