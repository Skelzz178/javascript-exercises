const removeFromArray = function (array, ...remove) {
  for (item of remove) {
    // Loops until item to be removed cannot be found in the array
    while (array.indexOf(item) !== -1) {
      array.splice(array.indexOf(item), 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
