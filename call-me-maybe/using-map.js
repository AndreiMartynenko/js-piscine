function citiesOnly(arr) {
    return arr.map((item) => item.city);
}

function upperCasingStates(arr) {
    return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}

function fahrenheitToCelsius(arr) {
    return arr.map(
        (item) =>
            Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() +
            "°C"
    );
}

function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}

function tempForecasts(arr) {
    return arr.map((item) => {
        return `${
            Math.floor(
                (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9)
            ).toString() + "°Celsius"
        } in ${item.city}, ${item.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`;
    });
}
  
/*

citiesOnly: This function takes an array of objects, each containing data about a city's weather forecast, and returns an array containing only the names of the cities.

upperCasingStates: This function takes an array of strings, each representing the name of a US state, and returns an array where each state name has its first letter capitalized.

fahrenheitToCelsius: This function takes an array of strings, each representing a temperature in Fahrenheit with a "°F" suffix, and returns an array where each temperature is converted to Celsius and has a "°C" suffix instead.

trimTemp: This function takes an array of objects, each containing temperature data for a city, and removes any spaces in the temperature string.

tempForecasts: This function takes an array of objects, each containing weather forecast data for a city, and returns an array where each object's temperature is converted to Celsius and its state name has its first letter capitalized. The resulting string also includes the city name and the "°Celsius" suffix.

*/