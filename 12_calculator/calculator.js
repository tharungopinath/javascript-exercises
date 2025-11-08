const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(sum) {
	return sum.reduce((total, current) => total = total+current, 0);
};

const multiply = function(mult) {
  return mult.reduce((total, current) => total = total * current, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let fact = 1;
	for (let i = a; i > 0; i--) {
    fact *= i; 
  }
  return fact;
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
