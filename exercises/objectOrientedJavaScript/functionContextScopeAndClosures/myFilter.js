function myFilter(array, func, context) {
  var result = [];
  var i;
  var self = context || this;
  for (i = 0; i < array.length; i += 1) {
    if (func.call(self, array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
