function myOwnEvery(array, func) {
  // var result = true;
  array.forEach(function (item) {
    if (!func(item)) {
      return false;
    }
  });
  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString); // true
