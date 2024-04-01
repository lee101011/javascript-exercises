const add = function(...operands) {
	return operands.reduce( (total, operand) => total + operand, 0);
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(operands) {
  return operands.reduce( (total, operand) => total + operand, 0);
};

const multiply = function(operands) {
  return operands.reduce( (total, operand) => total * operand, 1);
};

const power = function(base, power) {
	if(power === 0) return 1;
  let answer = base;
  for(let i = 1; i < Math.abs(power); i++) {
    answer *= base;
  }
  if(power < 0) return 1/answer;
  return answer;
  // or just Math.pow(base, power);
};

const factorial = function(factor) {
	let result = 1;
  for(let i = 1; i <= factor; i++) {
    result *= i;
  }
  return result;
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
