const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// const oldest = people.sort(function (a, b) {
//   const lastPerson = a.yearOfDeath - a.yearOfBirth;
//   const nextPerson = b.yearOfDeath - b.yearOfBirth;
//   return lastPerson > nextPerson ? -1 : 1;
// });

// function findTheOldest(people) {
//   return oldest[0];
// }
// // console.table(people[0].name);

let findTheOldest = function (people) {
  const age = (x) =>
    (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
  const oldest = people.sort((a, b) => (age(a) > age(b) ? -1 : 1));
  return oldest[0];
};

// const oldestPeople = people.sort(function (a, b) {
//   const lastPerson = a.yearOfDeath - a.yearOfBirth;
//   const nextPerson = b.yearOfDeath - b.yearOfBirth;
//   return lastPerson > nextPerson ? -1 : 1;
// });

// console.log(people[0]);
// console.log(findTheOldest(people));
// findTheOldest(people);
// console.log(findTheOldest(people));
// console.log(array[0].name);

// console.log(oldest);

// console.log(findTheOldest(people));

// console.table(sortOldest);
// console.log(sortOldest[0].name);
// console.table(oldest);

// function findTheOldest(oldest) {
//   console.log(oldest[0].name);
// }
// findTheOldest(people);
module.exports = findTheOldest;
