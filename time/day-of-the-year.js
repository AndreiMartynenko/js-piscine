
// Create a function named dayOfTheYear which accepts a Date. 
// Your function should return the number of days since the first day of that year.

function dayOfTheYear(date) {
    // Get the year and first day of that year
    const year = date.getFullYear();
    const firstDayOfYear = new Date(0);
    firstDayOfYear.setFullYear(year, 0, 1);
  
    // Calculate the difference in milliseconds between the two dates
    const diffInMs = date - firstDayOfYear;
  
    // Convert milliseconds to days and return the result
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.floor(diffInMs / msInDay) + 1;
  }
  
  