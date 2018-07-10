function randomNum(min, max) {
  var temp;
  if (min === max) {
    return min;
  } else (min > max) {
    temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
