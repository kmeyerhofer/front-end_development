function rotateRightmostDigits(num, digits) {
  var reversedDigitsArray = String(num).split('').reverse();
  var tempNum = reversedDigitsArray[digits - 1];
  var i;

  for (i = digits - 1; i > 0; i -= 1) {
    reversedDigitsArray[i] = reversedDigitsArray[i - 1];
  }
  reversedDigitsArray[0] = tempNum;
  return Number(reversedDigitsArray.reverse().join(''));
}


function maxRotation(num) {
  var i;
  var length = String(num).length;
  var rotatedNum = num;
  for (i = length; i > 0; i -= 1) {
    rotatedNum = rotateRightmostDigits(rotatedNum, i);
  }
  return rotatedNum;
}



maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
