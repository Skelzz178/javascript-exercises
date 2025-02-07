const fibonacci = function (num) {
  num = parseInt(num);

  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }

  let prevTotal = 0;
  let prevAnswer = 1;

  for (let i = 1; i <= num; i++) {
    currentAnswer = prevTotal + prevAnswer;

    prevAnswer = prevTotal;
    prevTotal = currentAnswer;
  }

  return currentAnswer;
};

// Do not edit below this line
module.exports = fibonacci;
