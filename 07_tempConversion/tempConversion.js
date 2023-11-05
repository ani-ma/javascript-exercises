const convertToCelsius = function(f) {
  c = (f-32)*(5/9);
  
  c = Math.round(c,2);
  return c;
};

const convertToFahrenheit = function(ce) {
  fa = ce*(9/5)+32;
  fa = Math.round(fa,2);
  return fa;
};

a = convertToCelsius(32) // fahrenheit to celsius, should return 0
console.log(a);
b = convertToFahrenheit(0)
console.log(b)

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
