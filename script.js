let firstNumber = prompt ('Enter first number');
const operation = prompt ('Enter operator (*/+-)');
let secondNumber = prompt ('Enter second number');
const error = 'Такой операции не существует';
const result = 'Ваш результат РЕЗУЛЬТАТ ';
let receivedNumber;

if (firstNumber !== null && secondNumber !== null && operation !== null) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (operation === '+') {
        receivedNumber = firstNumber + secondNumber;
    } else if (operation === '-') {
        receivedNumber = firstNumber - secondNumber;
    } else if (operation === '/') {
        receivedNumber = firstNumber / secondNumber;
    } else if (operation === '*') {
        receivedNumber = firstNumber * secondNumber;
    } else {
        receivedNumber = NaN;
    }

    if (isNaN(receivedNumber)) {
        alert (error);
    } else {
        alert (result + receivedNumber);
    }
} else {
    alert (error);
}