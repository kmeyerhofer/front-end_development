function getNumbers() {
  var firstNum = Number(prompt('Enter the 1st number:'));
  var secondNum = Number(prompt('Enter the 2nd number:'));
  var thirdNum = Number(prompt('Enter the 3rd number:'));
  var fourthNum = Number(prompt('Enter the 4th number:'));
  var fifthNum = Number(prompt('Enter the 5th number:'));
  var lastNum = Number(prompt('Enter the last number:'));
  var numArr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];

  if (numArr.indexOf(lastNum) === -1) {
    console.log('The number ' + lastNum + ' does not appear in [' + numArr + '].');
  } else {
    console.log('The number ' + lastNum + ' appears in [' + numArr + '].');
  }
}
