function objectHasProperty(object, string) {
  var keys = Object.keys(object);
  return keys.indexOf(string) !== -1;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};
