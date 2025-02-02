const reverseString = function (string) {
  stringToArray = string.split("");
  stringToArray.reverse();
  let processedString = stringToArray.join("");

  return processedString;
};

// Do not edit below this line
module.exports = reverseString;
