function objectsEqual(a, b) {
  var flag = true;
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  var i;
  var maxLength = Math.max(aKeys.length, bKeys.length);
  for (i = 0; i < maxLength; i += 1) {
    if (typeof a[aKeys[i]] === 'object' && typeof b[bKeys[i]] === 'object') {
      flag = objectsEqual(aKeys[i], bKeys[i]);
    } else if (aKeys[i] !== bKeys[i] || a[aKeys[i]] !== b[bKeys[i]]) {
      flag = false;
    }
  }
  return flag;
}

objectsEqual({a: 'foo'}, {a: 'foo'});            // true
objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'});  // false
objectsEqual({}, {});                            // true
