const buttons = document.querySelectorAll("button");

const numbers = document.querySelectorAll(".numbers button");

const operators = document.querySelectorAll(".operators button");

const display = document.querySelector(".display");

// Every time a button is clicked, fire off the display function

// add
function add(a, b) {
  console.log(`adding ${a} plus ${b}`);
  return a + b;
}

// subtract
function subtract(a, b) {
  console.log(`subtracting ${b} from ${a}`);
  return a - b;
}

// multiply
function multiply(a, b) {
  return a * b;
}

// divide
function divide(a, b) {
  return a / b;
}

// operate: takes an operator and 2 numbers, and one of the above functions

function operate(operator, a, b) {
  a = operator(a, b);
  console.log(`your answer is ${a}, check the display`);
  return a;
}

// Track click events on numbers and operators and run storeNumbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    storeNumber(number.textContent, number.parentElement.className);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    storeNumber(operator.id, operator.parentElement.className);
  });
});

let operatorClicked = false;
let secondNumber = display.textContent;
let firstNumber;
let secondOperator;
let selectedOperator;
// Store button clicks into variables and call operate function when an operator is clicked
function storeNumber(input, className) {
  // If number is selected, build the number as a string

  // store number

  if (className === "numbers") {
    if (secondNumber === "hello" || operatorClicked) {
      secondNumber = input;
      operatorClicked = false;
    } else {
      secondNumber += input;
    }

    displayResult(secondNumber);
  } else if (className === "operators") {
    if (input === "+") {
      selectedOperator = add;
    } else if (input === "-") {
      selectedOperator = subtract;
    } else if (input === "*") {
      selectedOperator = multiply;
    } else if (input === "/") {
      selectedOperator = divide;
    }
    operatorClicked = true;

    if (firstNumber && secondOperator && secondNumber) {
      secondNumber = operate(secondOperator, +firstNumber, +secondNumber);
      displayResult(secondNumber);

      operatorClicked = false;
    } else {
      console.log(`storing a value of ${firstNumber}`);
    }
    firstNumber = secondNumber;
    secondNumber = "";
    secondOperator = selectedOperator;
  }

  console.log(`your new secondNumber is ${secondNumber}`);
  console.log(`your new firstNumber is ${firstNumber}`);
  console.log(`your next operation is ${secondOperator}`);
  return secondNumber;
}

// display values of the pressed buttons
function displayResult(text) {
  return (display.textContent = `${text}`);
}

// If operator is selected, store the number as variable a, and build the next number

// If operator is selected, run the operation with initial value (variable a) set by conditional:
// If add/subtract, initial value = 0; if multiple/divide, initial value = 1.
