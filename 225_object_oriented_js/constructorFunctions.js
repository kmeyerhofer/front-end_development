function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.area = function {
  return Math.PI * (this.radius ** 2);
}

var a = new Circle(3);
var b = new Circle(4);

// Q6

var ninjaA;
var ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = (this.swung ? false : true);
  return this;
}

console.log(ninjaA.swing().swung);
console.log(ninjaB.swing().swung);

// Q7

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

var ninjaB = new (Object.getPrototypeOf(ninjaA).constructor);

console.log(ninjaB.constructor === ninjaA.constructor); // true