// const ftoc = function (f) {
//   celcius = (f - 32) * (5 / 9);
//   return celcius.toFixed(1);
// };

// const ctof = function (c) {
//   farenheit = c * (9 / 5) + 32;
//   return farenheit.toFixed(1);
// };

const ftoc = function (f) {
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (c) {
  return Math.round((c * (9 / 5) + 32) * 10) / 10;
};

module.exports = {
  ftoc,
  ctof,
};
