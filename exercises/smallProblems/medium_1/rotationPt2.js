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




rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
