
/*
Create a function named firstDayWeek, which accepts a specific week in a given year:
number: representing a week of the year (between 1 and 53).
string: representing a year.
Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.
Week 1 is in all cases, the week which contains the 1st of January.
The first day of a week is a Monday.
If the start of the week is in the previous year, then your function should return the first day of the specified year.
*/

// function firstDayWeek(week, year) {
//     const firstDayOfYear = new Date(year, 0, 1);
//     const dayOfYear = ((week - 1) * 7) + (1 - firstDayOfYear.getDay());
//     const date = new Date(year, 0, dayOfYear);
    
//     if (date.getFullYear() < year) {
//       return `01-01-${year}`;
//     }
    
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const formattedYear = date.getFullYear();
    
//     return `${day}-${month}-${formattedYear}`;
//   }

/*

This line creates a new Date object representing the first day of the year. 
Here's what each of the arguments passed to the Date constructor means:

year: the year for which we want to create the Date object.
0: the month argument of the Date constructor is zero-based, so 0 represents January.
1: the day argument of the Date constructor is one-based, so 1 represents the first day of the month.
So, new Date(year, 0, 1) creates a Date object representing January 1st of the specified year.

We need to create this Date object because we'll use it to calculate the day of the year for the first day of the specified week, 
which we'll use to create another Date object representing the first day of the specified week.

*/


function firstDayWeek(week, year) {
    let date = (1 + ((week - 1) * 7))

    let monday = new Date(year, 0, date )
    console.log(monday)

    while (monday.getDay() !== 1) {
        if (monday.getFullYear() == year - 1) {
            return '01-01-' + year.toString()
        }
        monday.setDate(monday.getDate() - 1)
    }

    if (year.toString().slice(0, 2) == '00') {
        monday.setDate(monday.getDate() + 1)
    }

    let dateRes = ''
    //format the date

        let track1 = monday.getDate()
        if (track1 < 10) {
            dateRes += '0' + track1.toString()+'-'
        } else {
            dateRes += track1.toString()+'-'
        }

    // format the month
    if (monday.getMonth() +1  < 10) {
        dateRes += '0' + (monday.getMonth()+ 1).toString()+'-'
    } else {
        dateRes += (monday.getMonth() + 1).toString()+'-'
    }
    
    //format the year
    if (year.toString().slice(0, 2) == '00') {
        dateRes += '00' + monday.getFullYear().toString().slice(-2)
    } else {
        dateRes += monday.getFullYear().toString()
    }
    return dateRes
}


  
  
  
