const findTheOldest = function (people) {
  // Create new array with new property "age"
  peopleWithAge = people.map((item) => {
    // Add age based on todays Year if yearOfDeath not defined
    if (!item.yearOfDeath) {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      item.age = currentYear - item.yearOfBirth;
      return item;
    } else {
      item.age = item.yearOfDeath - item.yearOfBirth;
      return item;
    }
  });

  // Set current oldest person to first person in array
  let oldestPerson = peopleWithAge[0];
  // Compare between array items to set oldest person
  for (let i = 0; i < peopleWithAge.length - 1; i++) {
    if (
      oldestPerson.age > peopleWithAge[i + 1].age ||
      oldestPerson.age === peopleWithAge[i + 1].age
    ) {
      continue;
    } else {
      oldestPerson = peopleWithAge[i + 1];
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
