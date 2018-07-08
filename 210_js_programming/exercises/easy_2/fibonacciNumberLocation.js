function countDigits(num) {
  var counter;
  var number = num;
  for (counter = 0; number >= 1; counter++) {
    number /= 10;
  }
  return counter;
}

function findFibonacciIndexByLength(digitCount) {
  var numOne = 1;
  var numTwo = 1;
  var temp = 0;
  var index = 2;
  var i;
  for (i = 1; digitCount > countDigits(numTwo); i++) {
    temp = numOne + numTwo;
    numOne = numTwo;
    numTwo = temp;

    index++
  }
  return index;
}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
