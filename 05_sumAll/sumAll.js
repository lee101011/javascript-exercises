const sumAll = function(num1, num2) {
  if(typeof num1 !== "number" || typeof num2 !== "number") return `ERROR`;
  if(num1 < 0 || num2 < 0) return `ERROR`;
  let range = reorderArguments(num1, num2);
  let sum = 0;
  for(let i = range[0]; i <= range[1]; ++i) {
    sum += i;
  }
  return sum;
};

function reorderArguments(num1, num2) {
  if(num2 > num1) return [num1, num2];
  return [num2, num1];
}

// Do not edit below this line
module.exports = sumAll;
