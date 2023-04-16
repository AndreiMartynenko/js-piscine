/*
Create a function hasCity that takes a string called country 
and an array of strings, which are cities of that country, 
which returns a new function.
The new function takes a string, called city, as a parameter 
and which determines whether the array contains that string or not.

If it does, it should return the string <city> is a city 
from <country>, otherwise <city> is not a city from <country>.
*/

function hasCity(country, cities) {
    return function(city) {
      if (cities.includes(city)) {
        return `${city} is a city from ${country}`;
      } else {
        return `${city} is not a city from ${country}`;
      }
    }
  }

  /*
  This function returns a new function that takes a city parameter 
  and checks if it's included in the cities array. 
  If it is, it returns a string saying that the city is from the country. 
  Otherwise, it returns a string saying that the city is not from the country.
  */
  

const cities = ['New York', 'Los Angeles', 'Chicago'];
const checkCity = hasCity('USA', cities);
console.log(checkCity('Los Angeles')); // "Los Angeles is a city from USA"
console.log(checkCity('Paris')); // "Paris is not a city from USA"
