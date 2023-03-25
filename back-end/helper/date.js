const fns = require('date-fns');

function getAllDaysInMonth(year, month) {
  const monthValue = month - 1;
  const date = new Date(year, monthValue, 1);

  const dates = [];

  while (date.getMonth() === monthValue) {
    dates.push(fns.format(new Date(date), 'yyyy-MM-dd'));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

function getStartAndEndDayInMonth(year, month) {
  const monthValue = month - 1;
  const date = new Date(year, monthValue, 1);

  const dates = [];

  while (date.getMonth() === monthValue) {
    dates.push(fns.format(new Date(date), 'yyyy-MM-dd'));
    date.setDate(date.getDate() + 1);
  }
  const result = {
    startDate: dates[0],
    endDate: dates[dates.length - 1]
  };

  return result;
}

function formatDate(date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const currentDate = date ? new Date(date) : new Date();
  const dd = currentDate.getDate();
  const MM = monthNames[currentDate.getMonth()];
  var yyyy = currentDate.getFullYear();

  const today = dd + ' ' + MM + ' ' + yyyy;
  return today;
};


module.exports = {
  getAllDaysInMonth,
  getStartAndEndDayInMonth,
  formatDate
};

// console.log(getAllDaysInMonth(2023, 02));
// console.log(getStartAndEndDayInMonth(2023, 02));

