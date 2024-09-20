const convertToCelsius = function (temp) {
  const tempCelc = (temp - 32) * (5 / 9);
  const roundCelc = Math.round(tempCelc * 10) / 10;
  return roundCelc;
};

const convertToFahrenheit = function (temp) {
  const tempFahr = temp * (9 / 5) + 32;
  const roundFahr = Math.round(tempFahr * 10) / 10;
  return roundFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
