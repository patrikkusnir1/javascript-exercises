const palindromes = function (word) {
  // remove punctuation
  let punctuation = /[\.,?!]/g;
  let newText = word.replace(punctuation, "")
  newText = newText.toLowerCase();
  newText = newText.replaceAll(" ", "")
  if (newText === newText.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
