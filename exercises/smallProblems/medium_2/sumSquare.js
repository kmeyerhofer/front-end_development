function sumSquareDifference(num) {
  return sum(num) - sumOfSquares(num);
}

function sum(num) {
  var i;
  var sum = 0;
  for (i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum ** 2;
}

function sumOfSquares(num) {
  var i;
  var sum = 0;
  for (i = 1; i <= num; i += 1) {
    sum += i ** 2;
  }
  return sum;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
