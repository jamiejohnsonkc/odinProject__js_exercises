// const reverseString = function (str) {
//   const letters = str.split("");
//   const reverseArray = letters.reverse();
//   const reorderedArray = reverseArray.toString();
//   const appendedString = reorderedArray.replace(/,/g, "");
//   console.log(letters);
//   letters.forEach((element) => reorderedArray.push(element));

//   for (i = 0; i < letters.length; i++) {
//     letters.forEach((element) => reorderedArray.push());
//   }
//   return reorderedArray;
//   console.log(`${appendedString}`);
// };

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

reverseString("hello there");
// console.log(reverseString("hello there"));

module.exports = reverseString;
