const leapYears = function(year) {
  if (!Number.isInteger(year) || year < 0) return `ERROR`;
  let a = year % 100 === 0;
  let b = year % 400 === 0 ;

  return (year % 100 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0);
};

// Do not edit below this line
module.exports = leapYears;
