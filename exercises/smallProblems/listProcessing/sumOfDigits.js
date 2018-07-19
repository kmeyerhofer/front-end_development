function sum(num) {
  var splitNum = String(num).split('');
  var numArr = splitNum.map(function (num) { return Number(num); });
  return numArr.reduce(function(sum, num) { return sum + num });
}
