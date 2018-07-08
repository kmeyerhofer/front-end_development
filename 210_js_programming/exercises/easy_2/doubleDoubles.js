function isDoubleDouble(num) {
  var stringNum = String(num);
  var center = stringNum.length / 2;
  var result = true;
  var i;
  for (i = 0; i < center; i++) {
    if (stringNum[i] !== stringNum[i + center]) {
      result = false;
    }
  }
  return result;
}

function twice(num) {
  return isDoubleDouble(num) ? num : num * 2;
}
