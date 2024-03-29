const removeFromArray = function (array, ...itemsToRemove) {
  let result = array.filter(
    (itemToRemove) => !itemsToRemove.includes(itemToRemove)
    );
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
