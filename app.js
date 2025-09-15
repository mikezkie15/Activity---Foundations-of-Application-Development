// calculator.js
const readline = require("readline");

// Functions
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return x / y;
}

function average(x, y) {
  return (x + y) / 2;
}

// Readline setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askNumbers() {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      // Error handling
      const x = parseFloat(num1);
      const y = parseFloat(num2);

      if (isNaN(x) || isNaN(y)) {
        console.log("Invalid input. Please enter numbers only.\n");
        return askAgain();
      }

      // Perform operations
      console.log(`\nResults for ${x} and ${y}:`);
      console.log(`Addition: ${add(x, y)}`);
      console.log(`Subtraction: ${subtract(x, y)}`);
      console.log(`Multiplication: ${multiply(x, y)}`);
      console.log(`Division: ${divide(x, y)}`);
      console.log(`Average: ${average(x, y)}`);

      askAgain();
    });
  });
}

function askAgain() {
  rl.question("\nDo you want to calculate again? (y/n): ", (answer) => {
    if (answer.toLowerCase() === "y") {
      askNumbers();
    } else {
      console.log("Exiting calculator. Goodbye!");
      rl.close();
    }
  });
}

// Start program
console.log("=== Simple Calculator App ===");
askNumbers();
