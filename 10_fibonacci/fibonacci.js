const fib = function (num) {
  const RATIO = 1.618034;
  num = parseInt(num);
  if (num < 0) return "OOPS";
  return Math.round((Math.pow(RATIO, num) - Math.pow(1 - RATIO, num)) / (Math.pow(5, 0.5)))
}

const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";
  if (num === 1) return 1;
  if (num === 2) return 1;
  let first = 1;
  let second = 1;
  let total = 0;
  for (let i = 3; i <= num; i++) {
    total = first + second;
    [first, second] = [second, total];
  }
  return total;
};

// Do not edit below this line
module.exports = fibonacci;
