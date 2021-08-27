//my solution
// const sumAll = function (a, b) {
//   let sum = Math.min(a, b);
//   let arr = [];
//   let final = 0;
//   if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
//     for (let i = 0; i <= Math.max(a, b) - Math.min(a, b); i++) {
//       let element = sum++;
//       arr.push(element);
//     }
//     for (let i = 0; i < arr.length; i++) {
//       final += arr[i];
//     }
//     console.log(final);
//     return final;
//   } else {
//     console.log("error");
//     return "ERROR";
//   }
// };
// sumAll(1,4);

//revised with cleaner conditional
const sumAll = function (a, b) {
  let sum = Math.min(a, b);
  let arr = [];
  let final = 0;
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  for (let i = 0; i <= Math.max(a, b) - Math.min(a, b); i++) {
    let element = sum++;
    arr.push(element);
  }
  for (let i = 0; i < arr.length; i++) {
    final += arr[i];
  }
  console.log(final);
  return final;
};
sumAll(1, 4);

module.exports = sumAll;
