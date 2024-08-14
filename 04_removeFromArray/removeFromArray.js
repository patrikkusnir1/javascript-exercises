const removeFromArray = function (array, ...deleteNums) {
  // loop through each number in deleteNums
  for (let i = 0; i < deleteNums.length; i++) {
    // current number to delete
    let deleteNum = deleteNums[i];
    // loop through the array to find the num to delete
    for (let j = 0; j < array.length; j++) {
      if (array[j] === deleteNum) {
        array.splice(j, 1); // remove element
        j--; // slide to next element what to be removed
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
