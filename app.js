// Calculator Functions
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
    throw new Error("Error: Cannot divide by zero!");
  }
  return x / y;
}

function average(numbers) {
  if (numbers.length === 0) {
    throw new Error("Error: No numbers provided!");
  }
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// Main App
function runCalculator() {
  console.log("=== Simple Calculator App ===");

  try {
    // Get user input
    const input1 = prompt("Enter the first number:");
    const input2 = prompt("Enter the second number:");

    const num1 = Number(input1);
    const num2 = Number(input2);

    // Error handling for invalid input
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid input: Please enter valid numbers!");
    }

    // Display results
    console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
    console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
    console.log(`${num1} × ${num2} = ${multiply(num1, num2)}`);
    console.log(`${num1} ÷ ${num2} = ${divide(num1, num2)}`);
    console.log(`Average = ${average([num1, num2])}`);

  } catch (error) {
    console.error(error.message);
  }

  // Ask user if they want to repeat
  const again = prompt("Do you want to calculate again? (yes/no):");
  if (again.toLowerCase() === "yes") {
    runCalculator(); // recursion for looping
  } else {
    console.log("Thanks for using the calculator!");
  }
}

// Run the app
runCalculator();
