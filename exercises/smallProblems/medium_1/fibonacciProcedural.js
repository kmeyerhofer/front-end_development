function fibonacci(num) {
  var one = 1;
  var two = 1;
  var sum = 0;
  var i;
  for (i = 3; i <= num; i += 1) {
    sum = one + two;
    one = two;
    two = sum;
  }
  return two;
}
