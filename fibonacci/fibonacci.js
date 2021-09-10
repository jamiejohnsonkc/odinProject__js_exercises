// const fibonacci = function (n) {

function fibonacci(member) {
  let fibArray = [0, 1];
  if (member >= 0) {
    for (let i = 1; i < member; i++) {
      fibArray.push(fibArray[i] + fibArray[i - 1]);
    }
    return fibArray[member];
  } else {
    return "OOPS";
  }
}

module.exports = fibonacci;
