function incrementProperty(object, string) {
  var keys = Object.keys(object);
  if (keys.indexOf(string) !== -1) {
    object[string]++;
  } else {
    object[string] = 1;
  }
  return object[string];
}
