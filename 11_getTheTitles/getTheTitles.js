const getTheTitles = function (books) {
  const bookTitles = [];

  books.forEach((item) => bookTitles.push(item.title));

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
