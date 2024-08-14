const reverseString = function (string) {
  let splitString = string.split(""); // return new array
  let reverseArray = splitString.reverse(); // reverse array
  let joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
