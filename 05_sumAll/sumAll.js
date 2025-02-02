const sumAll = function (first, second) {
  // Returns ERROR if negative number
  if (first < 0 || second < 0) {
    return "ERROR";
  }
  // Returns ERROR if not an integer
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    return "ERROR";
  }
  // Returns ERROR if typeof not 'number'
  if (typeof first !== "number" || typeof second !== "number") {
    return "ERROR";
  }
  // Set lesser num as first & higher num as end
  if (first < second) {
    start = first;
    end = second;
  } else {
    start = second;
    end = first;
  }
  // Loops between start to end and sums all values in between
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
