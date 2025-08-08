const convertToCelsius = function(temp) {
    let tempConverted = (temp - 32) *(5/9);
    return Number.isInteger(tempConverted) ? tempConverted : +tempConverted.toFixed(1);
};

const convertToFahrenheit = function(temp) {
    let tempConverted = temp * (9/5) + 32;
    return Number.isInteger(tempConverted) ? tempConverted : +tempConverted.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
