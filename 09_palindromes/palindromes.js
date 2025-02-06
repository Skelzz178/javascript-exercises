const palindromes = function (str) {
  // Processed string to lower case and remove punctuation
  newString = str.toLowerCase();
  newString = newString.replace(/[^\w\s]|_/g, "");
  // Transform string to array and remove blank items
  newArray = newString.split("");
  newArray = newArray.filter((a) => a !== " ");

  // Counter for loop will be half of array length
  toLoopFor = Math.floor(newArray.length / 2);
  console.log(newArray);
  console.log(toLoopFor);
  // Loop to compare the front and end of the array
  for (let i = 0; i < toLoopFor; i++) {
    if (newArray[i] === newArray[newArray.length - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
