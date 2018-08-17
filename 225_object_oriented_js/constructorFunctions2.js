// Q1
function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

var shape = {
  getType: function() {
    return this.type;
  },
};

Triangle.prototype = shape;
Triangle.prototype.getPerimiter = function() {
  return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;


var t = new Triangle(1, 2, 3);
t.constructor;                 // Triangle(a,b,c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"

// Q2
function User(first, last) {
  if (this === window) {
    return { name: first + ' ' + last, };
  } else {
    this.name = first + ' ' + last;
  }
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);         // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe


// Q3

function createObject(obj) {
  // var returnedObj = {};
  // returnedObj.__proto__ = obj;
  // return returnedObj;
  function F() {}
  F.prototype = obj;
  return new F();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);     // true


// Q4


Object.prototype.begetObject = function() {
  return Object.create(this);
}

var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);     // true


// Q5


function neww(constructor, args) {
  return new constructor(args[0], args[1]);
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();        // Hello, John Doe
john.constructor;       // Person(firstName, lastName) {...}