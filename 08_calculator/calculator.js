const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(array) {
  return array.reduce((partialSum, a) => partialSum + a, 0)
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b, 1)
};

const power = function(num, power) {
	return num ** power
};

const factorial = integer =>  {
  let factorial = 1;

  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
