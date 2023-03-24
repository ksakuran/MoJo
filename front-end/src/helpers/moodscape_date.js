const fns = require('date-fns');


const getCurrentDate = () => {

  const formattedDate  = fns.format(new Date(), 'dd-MM-yyyy');
  return formattedDate

};

getCurrentDate();

export default getCurrentDate;