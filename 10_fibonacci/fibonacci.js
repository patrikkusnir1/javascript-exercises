function fibonacci(num) {
  let num1 = 1;
  let num2 = 1;
  let nextTerm;

  // Base cases
  if (num == 0) return 0;
  if (num == 1 || num == 2) return 1; // If the input is 1, return the first Fibonacci number (0)
  let number = Number(num)
  // Calculate the Fibonacci number for num > 2
  if (number > 2) {
    for (let i = 3; i <= number; i++) {
    nextTerm = num1 + num2; // Calculate next Fibonacci number
    num1 = num2;            // Shift num1 to num2
    num2 = nextTerm;        // Shift num2 to the new Fibonacci number
  }
    return num2; // Return the nth Fibonacci number
  } else {
    return "OOPS"
  }
  
}



// Do not edit below this line
module.exports = fibonacci;
