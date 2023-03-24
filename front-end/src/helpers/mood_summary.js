const data = {
  moodSummary: {
    ids: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
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
    data: [
      "2",
      "4",
      "2",
      "2",
      "9",
      "3",
      "3",
      "3",
      "6",
      "2",
      "3",
      "4",
      "7",
      "4",
      "3",
    ],
  },
};

const getDonutChartData = (dataset) => {
  const labels = dataset.moodSummary.labels;
  const data = dataset.moodSummary.data;

  const donutChartData = {
    labels,
    datasets: [
      {
        label: [],
        data,
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

  return donutChartData;
};

// console.log(getDonutChartData(data));

module.exports = { getDonutChartData };
