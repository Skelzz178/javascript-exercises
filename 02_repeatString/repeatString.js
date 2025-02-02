const repeatString = function (string, num) {
  let fullString = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      fullString += string;
    }
  } else {
    return "ERROR";
  }

  return fullString;
};

// Do not edit below this line
module.exports = repeatString;
