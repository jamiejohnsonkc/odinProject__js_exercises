const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// let result = books.map((a) => a.title);

// console.log(result);

const getTheTitles = function (books) {
  result = books.map((a) => a.title);
  return result;
};

// console.log(getTheTitles(books));

//   const titles = Array.from(books.title);
//   return titles;
//   console.log(titles);
// };

// console.log(getTheTitles(books));
module.exports = getTheTitles;
