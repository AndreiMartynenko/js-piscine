// Create a function named countLeapYears which accepts a Date. 
// Your function should return the number of leap years to have taken place since the year 1.

function countLeapYears(date) {
    const year = date.getFullYear();
    let count = 0;
    for (let y = 1; y < year; y++) {
      if (isLeapYear(y)) {
        count++;
      }
    }
    return count;
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
