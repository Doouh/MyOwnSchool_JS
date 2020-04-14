// Program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

if (firstNumber > secondNumber) {
    alert(`${firstNumber} is greater than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    alert(`${firstNumber} is smaller than ${secondNumber}`);
} else if (firstNumber === secondNumber) {
    alert(`${firstNumber} is equal to ${secondNumber}`);
} else {
    alert("Please enter a valid number");
}
