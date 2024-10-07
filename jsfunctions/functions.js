// Create functions that takes two numbers and an operator as input and perform different operations on the number

function twoNumbers(number1, number2, operator) {
  if (operator === "/") {
    return number1 / number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "%") {
    return number1 % number2;
  } else {
    return "The operator is invalid";
  }
}

twoNumbers(7.5, 2.1, "%");
let roundedNum = twoNumbers(7.5, 2.1, "%").toFixed(2);
console.log(roundedNum);

// Create a single function that takes an array of numbers and operators as input, and perform the operations in chronological

function addNumber(number3, operators) {
  let result = number3[0];
  for (let i = 0; i < operators.length; i++) {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {
        result += number3;
      }
    }

    return result;
  }
}

addNumber(4, "+");
console.log(result);

// it is well 😀😀😀
