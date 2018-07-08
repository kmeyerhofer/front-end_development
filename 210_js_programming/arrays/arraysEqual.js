function arraysEqual(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  var i;
  for (i = 0; i < arrOne; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}
