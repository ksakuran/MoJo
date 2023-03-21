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

module.exports = {
  getAllDaysInMonth,
  getStartAndEndDayInMonth
};

// console.log(getAllDaysInMonth(2023, 02));
// console.log(getStartAndEndDayInMonth(2023, 02));

