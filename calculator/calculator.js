/* TODO
- Add keyboard support
- Add decimal
- Add backspace button
- Add a secondary display

- Refactor storeNumber function: The storeNumber function is currently doing too many things. It would be better to break it up into smaller functions that have clear and specific purposes. For example, you could have a function that handles number input, another for operator input, and another for equals input.

*/

const buttons = document.querySelectorAll("button");

const numbers = document.querySelectorAll(".numbers button");

const operators = document.querySelectorAll(".operators button");
const equals = document.querySelector(".equals button");
const clear = document.querySelector("#clear");

const display = document.querySelector(".display");
const paperTape = document.querySelector(".display-tape");

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

equals.addEventListener("click", () => {
  calculateResult();
});

// Track keyboard
window.addEventListener("keydown", function (event) {
  console.log(event.key);
  switch (event.key) {
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      // The key pressed is a mathematical operator or a decimal point
      storeNumber(event.key, "operators");
      break;

    // The key pressed is the equals sign or Enter key
    case "=":
    case "Enter":
      calculateResult();
      break;

    // The key pressed is the c key
    case "c":
      clearResult();
      break;

    default:
      if (!isNaN(event.key)) {
        // The key pressed is a number
        storeNumber(event.key, "numbers");
      }
      break;
  }
});

let operatorClicked = false;
let secondNumber = display.textContent;
let firstNumber;
let storedOperator; //keeps track of the previously selected operator
let selectedOperator; //keeps track of the currently selected operator
let symbol;

function clearResult() {
  firstNumber = "";
  secondNumber = "";
  storedOperator = "";
  displayResult(`hello`);
  console.log(`you pressed clear`);
}

clear.addEventListener("click", () => {
  clearResult();
});

// This function stores button clicks into variables and calls the operate function when an operator is clicked
function storeNumber(input, className) {
  // If number is selected, build the number as a string

  // Store the number

  if (className === "numbers") {
    if (secondNumber === "hello" || operatorClicked) {
      secondNumber = input;
    } else {
      secondNumber += input;
    }
    displayResult(secondNumber);

    // If an operator was pressed, run the code
  } else if (className === "operators") {
    symbol = input;

    if (input === "+") {
      selectedOperator = add;
    } else if (input === "-") {
      selectedOperator = subtract;
    } else if (input === "*") {
      selectedOperator = multiply;
    } else if (input === "/") {
      selectedOperator = divide;
    }

    // We check if an operator was previously stored; if so, then the previous operation is run and its result is displayed. The currently selected operator is stored in selectedOperator.
    if (firstNumber && storedOperator && secondNumber) {
      displayTape(firstNumber, symbol, secondNumber);
      secondNumber = operate(storedOperator, +firstNumber, +secondNumber);
      displayResult(secondNumber);
    }

    // Whenever an operator is clicked, we transfer the value from secondNumber to firstNumber, and store the selected operator until the next input is selected
    firstNumber = secondNumber;
    secondNumber = "";
    storedOperator = selectedOperator;
  }
}

function calculateResult() {
  // Whenever equals is clicked, the operation is performed with the stored operator (same as above), but the first number and stored operator are reset.
  if (firstNumber && storedOperator && secondNumber) {
    displayTape(firstNumber, symbol, secondNumber);
    secondNumber = operate(storedOperator, +firstNumber, +secondNumber);
    displayResult(secondNumber);

    // The firstNumber and secondOperator variables are reset to empty strings after the calculation is performed.
    firstNumber = "";
    storedOperator = "";
  }
  console.log(`your new secondNumber is ${secondNumber}`);
  console.log(`your new firstNumber is ${firstNumber}`);
  console.log(`your next operation is ${storedOperator}`);
  return secondNumber;
}

// display values of the pressed buttons
function displayResult(text) {
  return (display.textContent = `${text}`);
}

// display values of previously pressed buttons
function displayTape(x, operator, y) {
  console.log(`x is: ${x}`);
  console.log(`operator is: ${operator}`);
  console.log(`y is: ${y}`);
  return (paperTape.textContent = `${x}${operator}${y}`);
}

/* Explanation

secondOperator and selectedOperator are used to keep track of the operator that the user has clicked.

selectedOperator is assigned the value of the operator that is clicked by the user in the storeNumber function when the className is "operators". This is done in order to keep track of the operator that has been selected by the user, and it is used later in the code when the equal button is pressed.

secondOperator is used to keep track of the operator that was previously selected by the user. It is used in the storeNumber function when a new operator is clicked. If the user has already selected a first number, a second number and an operator, and then selects a new operator, secondOperator will be used to perform the operation using the previous operator and the previous two numbers.
*/
