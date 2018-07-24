function featured(num) {
  var i;
  var j;
  var splitNum;
  if (num > 1023456987) {
    return 'No next featured number';
  }
  for (i = num; i <= 1023456987; i += 1) {
    if (i !== num && i % 7 === 0 && i % 2 === 1) {
      splitNum = String(i).split('');
      var firstIndex;
      var lastIndex;
      if (splitNum.some(function(digit, index) {
        firstIndex = splitNum.indexOf(splitNum[index]);
        lastIndex = splitNum.lastIndexOf(splitNum[index]);
        return firstIndex !== lastIndex;
      })) {
        continue;
      } else {
        return i;
      }
    }
  }
}




featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
