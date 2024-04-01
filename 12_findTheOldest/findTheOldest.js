const findTheOldest = function(people) {
  const result = people.slice()
    .sort((a, b) => 
      fixYear(b.yearOfDeath) - fixYear(b.yearOfBirth)
      - (fixYear(a.yearOfDeath) - fixYear(a.yearOfBirth))
    );
  console.log(result);
  return result[0];
};

function fixYear(date) {
  return date? date : new Date().getFullYear();
}

// Do not edit below this line
module.exports = findTheOldest;
