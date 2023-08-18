const convertToCelsius = function(F) {
  const C = ((F - 32) * 5/9);
  const rounded = Math.round(C * 10) / 10;
  return rounded;
   
};

const convertToFahrenheit = function(C) {
  const F = ((C * 9/5) + 32);
  const rounded = Math.round(F * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
