
// Create the following functions which accept a Date:

// isFriday: returns true if the Date is a Friday.
// isWeekend: returns true if the Date is a weekend day.
// isLeapYear: returns true if the year of the Date is a leap year.
// isLastDayOfMonth: returns true if the Date represents the last day of the month.


function isFriday(date) {
    return date.getDay() === 5; // 0 is Sunday, 1 is Monday, and so on
}

function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6; // 0 is Sunday, 6 is Saturday
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return date.getDate() === lastDayOfMonth;
}

const date = new Date('2023-03-07');
console.log(isFriday(date)); // false
console.log(isWeekend(date)); // false
console.log(isLeapYear(date)); // false
console.log(isLastDayOfMonth(date)); // false

