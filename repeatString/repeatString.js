// let times;
// let string;

const repeatString = function (string, times) {
  if (times < 0) {
    return "ERROR";
  } else if (times === 0) {
    return "";
  } else {
    for (i = 0; i < times; i++) {
      // console.log(string);
      return string.repeat(times);
    }
  }
};

repeatString("hey", -1);
// console.log(repeatString("hey", -1));
// repeatString("hey", 3);
// console.log(repeatString());

module.exports = repeatString;
