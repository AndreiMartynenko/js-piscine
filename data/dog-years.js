
// Someone once said that a human year is equal to 7 dog years.

// Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds. Your function should return the age of the dog on that planet in dog years.

// earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
// mercury: orbital period 0.2408467 Earth years.
// venus: orbital period 0.61519726 Earth years.
// mars: orbital period 1.8808158 Earth years.
// jupiter: orbital period 11.862615 Earth years.
// saturn: orbital period 29.447498 Earth years.
// uranus: orbital period 84.016846 Earth years.
// neptune: orbital period 164.79132 Earth years.
// If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old.

// You will have to format the number so that the result is rounded like the example above.

function dogYears(planet, age) {
    //calculate the earth age of the dog
    const earthAge = (age / 31557600) * 7

    switch (planet) {
        case 'earth':
            //The toFixed() method converts a number to a string.
            //The toFixed() method rounds the string to a specified number of decimals.
            //The parseFloat() method parses a value as a string and returns the first number.
            return parseFloat(earthAge.toFixed(2))
            break;
        case 'mercury':
           const mercAge = earthAge / 0.2408467
            return parseFloat(mercAge.toFixed(2))
            break;
        case 'venus':
            const venusAge = earthAge / 0.61519726
            return parseFloat(venusAge.toFixed(2))
            break;
        case 'mars':
            const marsAge = earthAge / 1.8808158
            return parseFloat(marsAge.toFixed(2))
            break;
        case 'jupiter':
            const jupAge = earthAge / 11.862615
            return parseFloat(jupAge.toFixed(2))
            break;
        case 'saturn':
            const satAge = earthAge / 29.447498
            return parseFloat(satAge.toFixed(2))
            break;
        case 'uranus':
            const urAge = earthAge / 84.016846
            return parseFloat(urAge.toFixed(2))
            break;
        case 'neptune':
            const nepAge = earthAge / 164.79132
            return parseFloat(nepAge.toFixed(2))
            break;
    }
}


function dogYears(planet, ageInSeconds) {
    const earthYears = ageInSeconds / 31557600; // 1 Earth year = 31557600 seconds
    let dogYears = earthYears / 7; // 1 human year = 7 dog years
    switch (planet) {
      case 'mercury':
        dogYears /= 0.2408467;
        break;
      case 'venus':
        dogYears /= 0.61519726;
        break;
      case 'mars':
        dogYears /= 1.8808158;
        break;
      case 'jupiter':
        dogYears /= 11.862615;
        break;
      case 'saturn':
        dogYears /= 29.447498;
        break;
      case 'uranus':
        dogYears /= 84.016846;
        break;
      case 'neptune':
        dogYears /= 164.79132;
        break;
      default:
        dogYears /= 1; // If the planet is not recognized, assume it's Earth
    }
    return parseFloat(dogYears.toFixed(2));
  }