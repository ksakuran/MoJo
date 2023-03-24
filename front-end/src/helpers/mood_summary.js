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
          "#FFDD47",
          "#B35681",
          "#C1FBA4",
          "#FEA971",
          "#6A83F1",
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
          "#6A83F1",
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

  return donutChartData
};

// console.log(getDonutChartData(data));

module.exports = { getDonutChartData };