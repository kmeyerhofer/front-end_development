function push(arr, other) {
  arr[arr.length] = other;
  return arr.length;
}

function join(arr, str) {
  var newString = '';
  var i;
  for (i = 0; i < arr.length; i++) {
    newString += String(arr[i]);
    if (i === arr.length - 1) {
      break;
    } else {
      newString += str;
    }
  }
  return newString;
}
