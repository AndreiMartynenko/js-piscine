
// Create a function named matchCron, which accepts a valid cron string, and a valid Date. 
// Your function should return true if the pattern matches the Date.
// You only need to implement numbers and *. Other complex patterns are not required.
// Only valid patterns will be tested.

function matchCron(cron, date) {
    const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(' ');
    const dateMinute = date.getMinutes().toString();
    const dateHour = date.getHours().toString();
    const dateDayOfMonth = date.getDate().toString();
    const dateMonth = (date.getMonth() + 1).toString();
    const dateDayOfWeek = date.getDay().toString();
    return (
      matchSegment(minute, dateMinute) &&
      matchSegment(hour, dateHour) &&
      matchSegment(dayOfMonth, dateDayOfMonth) &&
      matchSegment(month, dateMonth) &&
      matchSegment(dayOfWeek, dateDayOfWeek)
    );
  }
  
  function matchSegment(segment, value) {
    if (segment === '*') {
      return true;
    }
    const segmentValues = segment.split(',');
    return segmentValues.includes(value);
  }
  