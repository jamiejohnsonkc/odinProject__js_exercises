const palindromes = function (text) {
  //   return text === "bill" ? true : false;
  //   return Array.from(text);

  const newText = text.replace(/[^\w]/g, "");
  const edit = newText.toString().toLowerCase();

  //   console.log(edit);

  const forward = Array.from(edit);
  //   console.log(forward);
  const backward = Array.from(forward);
  //   console.log(backward);
  backward.reverse();
  //   console.log(backward);

  for (var i = 0; i < forward.length; i++)
    if (forward[i] != backward[i]) return false;
  return true;
};

// console.log(palindromes("raC eCar"));

module.exports = palindromes;
