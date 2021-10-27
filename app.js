var plusMinus = document.querySelector('#plusMinus');
var percentage = document.querySelector('#percentage');
var quotient = document.querySelector('#quotient');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var multiplication = document.querySelector('#multiplication');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var subtraction = document.querySelector('#subtraction');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var addition = document.querySelector('#addition');
var zero = document.querySelector('#zero');
var decimal = document.querySelector('#decimal');
var equal = document.querySelector('#equal');
var result = document.querySelector('#display');
var ac = document.querySelector('#ac');
var numbers = [zero, one, two, three, four, five, six, seven, eight, nine, decimal];
var currentNumber = '';
var operators = ['+', '-', '*', '/'];
var lastChar;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    currentNumber += numbers[i].innerHTML;
    updateDisplay(currentNumber);
  });
}

function updateDisplay(value) {
  if (value.toString().length < 8) {
    result.innerHTML = value;
  } else {
    result.innerHTML = value.toString().substring(0, 8);
  }
}

addition.addEventListener('click', function () {
  lastChar = result.innerHTML;
  lastChar = lastChar[lastChar.length - 1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += '+';
    updateDisplay(currentNumber);
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    currentNumber += '+';
    updateDisplay(currentNumber);
  }
});

subtraction.addEventListener('click', function () {
  lastChar = result.innerHTML;
  lastChar = lastChar[lastChar.length - 1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += '-';
    updateDisplay(currentNumber);
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    currentNumber += '-';
    updateDisplay(currentNumber);
  }
});

multiplication.addEventListener('click', function () {
  lastChar = result.innerHTML;
  lastChar = lastChar[lastChar.length - 1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += '*';
    updateDisplay(currentNumber);
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    currentNumber += '*';
    updateDisplay(currentNumber);
  }
});

quotient.addEventListener('click', function () {
  lastChar = result.innerHTML;
  lastChar = lastChar[lastChar.length - 1];
  if (operators.indexOf(lastChar) == -1) {
    currentNumber += '/';
    updateDisplay(currentNumber);
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    currentNumber += '/';
    updateDisplay(currentNumber);
  }
});

percentage.addEventListener('click', function () {
  result.innerHTML = result.innerHTML / 100;
});

plusMinus.addEventListener('click', function () {
  if (result.innerHTML[0] !== '-') {
    result.innerHTML = '-' + result.innerHTML;
  } else {
    result.innerHTML = result.innerHTML.slice(1, result.innerHTML.length);
  }
});

equal.addEventListener('click', function () {
  if (typeof eval(currentNumber) == 'number') {
    currentNumber = eval(currentNumber);
    updateDisplay(currentNumber);
  } else {
    updateDisplay('error');
  }
});

ac.addEventListener('click', function () {
  result.innerHTML = '0';
  currentNumber = '';
});
