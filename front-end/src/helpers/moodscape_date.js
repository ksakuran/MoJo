const fns = require('date-fns');


const getCurrentDate = () => {
  // const date = new Date();
  
  // let day = date.getDate();
  // let month = date.getMonth() +1;
  // let year = date.getFullYear();
  
  // // This arrangement can be altered based on how we want the date's format to appear.
  // const currentDate = `${day}-${month}-${year}`;
  const formattedDate  = fns.format(new Date(), 'dd-MM-yyyy');
  console.log(formattedDate);

};

getCurrentDate();

export default getCurrentDate;