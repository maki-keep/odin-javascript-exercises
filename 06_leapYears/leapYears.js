const leapYears = function(year) {
  const yearInt = parseInt(year);
  const div4 = yearInt % 4 === 0;
  const div100 = yearInt % 100 === 0;
  const div400 = yearInt % 400 === 0;
  return (div4 && (!div100 || div400));
};

// Do not edit below this line
module.exports = leapYears;
