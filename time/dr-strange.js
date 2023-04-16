
// function to add a 14-day week to a given date and return the weekday as a string
function addWeek(date) {
  const epoch = new Date('0001-01-01');
  const daysSinceEpoch = Math.floor((date.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24));
  //daysSinceEpoch is the number of days that have elapsed since the epoch of our new 14-day week (0001-01-01). 
  //We calculate this as the difference between the input date and the epoch, in milliseconds, divided by the number of milliseconds in a day:
  //const daysSinceEpoch = Math.floor((date.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24));
 //% is the modulo operator in JavaScript. 
 //It calculates the remainder when the left operand (daysSinceEpoch in this case) is divided by the right operand (14). 
 //% is the modulo operator in JavaScript. It calculates the remainder when the left operand (daysSinceEpoch in this case) is divided by the right operand (14). For example, 15 % 14 is 1, because 15 divided by 14 leaves a remainder of 1.
 //For example, 15 % 14 is 1, because 15 divided by 14 leaves a remainder of 1. % is the modulo operator in JavaScript. It calculates the remainder when the left operand (daysSinceEpoch in this case) is divided by the right operand (14). 
 //For example, 15 % 14 is 1, because 15 divided by 14 leaves a remainder of 1.
  const weekdayIndex = daysSinceEpoch % 14;
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];
  return weekdays[weekdayIndex >= 0 ? weekdayIndex : weekdayIndex + 14];
  /*
  The ? symbol is part of a ternary operator in JavaScript. 
  It's called the conditional (or ternary) operator because it takes three operands: a condition followed by two expressions.
  */
  //If weekdayIndex is greater than or equal to zero, the condition is true, and the expression evaluates to weekdayIndex. This means we use weekdayIndex as the index into the weekdays array.
//If weekdayIndex is negative, the condition is false, and the expression evaluates to weekdayIndex + 14. This means we add 14 days to weekdayIndex to get a positive index into the weekdays array.
}

function timeTravel({ date, hour = 0, minute = 0, second = 0 }) {
  const newDate = new Date(date.getTime());
  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);
  return newDate;
}



