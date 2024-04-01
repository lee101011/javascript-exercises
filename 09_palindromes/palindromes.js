const palindromes = function (word) {
  const clean = word.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  const reverse = clean.split('').reverse().join('');
  console.log(clean, reverse);
  return clean === reverse;
};

// Do not edit below this line
module.exports = palindromes;
