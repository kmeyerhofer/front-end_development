function getDefiningObject(object, property) {
  // Recursive
  if (object.hasOwnProperty(property)) {
    return object;
  } else if (Object.getPrototypeOf(object) === Object.prototype) {
    return null;
  } else {
    return getDefiningObject(Object.getPrototypeOf(object), property);
  }
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);  // true
console.log(getDefiningObject(qux, 'e'));          // null
