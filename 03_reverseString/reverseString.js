const reverseString = function(input) {
  let reverse  = ``;
  for(let i = input.length - 1; i >= 0; --i) {
    reverse += input[i];
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
