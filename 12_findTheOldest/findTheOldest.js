const getAge = function(person) {
  if (!Object.hasOwn(person, 'yearOfDeath')) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function(people) {
  // assume that the oldest person is the first, 
  // then loop through people
  let oldestPerson = people[0];
  people.forEach(person => {
    oldestPerson = getAge(person) > getAge(oldestPerson) ? person : oldestPerson;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
