function lastNOf(arr, count) {
  var checkedCount = arr.length - count;
  if (checkedCount < 0) {
    checkedCount = 0;
  }
  return arr.slice(checkedCount);
}
