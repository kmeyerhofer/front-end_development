function shortLongShort(stringOne, stringTwo) {
  var oneLen = stringOne.length;
  var twoLen = stringTwo.length;
  if (oneLen > twoLen) {
    console.log(stringTwo + stringOne + stringTwo);
  } else {
    console.log(stringOne + stringTwo + stringOne);
  }
}
