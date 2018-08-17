// Q1
// recursive
function getDefiningObject(object, propKey) {
  if (object.hasOwnProperty(propKey)) {
    return object;
  } else if (Object.getPrototypeOf(object) === Object.prototype) {
    return null;
  } else {
    return getDefininigObject(Object.getPrototypeOf(object), propKey);
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

console.log(getDefiningObject(qux, 'c') === bar); // true
console.log(getDefiningObject(qux, 'e'));         // null


// Q2


function shallowCopy(object) {
  // var returnedObj = {};
  // while (object !== Object.prototype) {
  // 
  // }
  // return Object.create(object);
  
  var copy = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(function(prop) {
    copy[prop] = object[prop];
  });
}

var foo = { a:1, b:2, };

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);             //1
baz.say();                      // "c is 3"
baz.hasOwnProperty('a');        //false
baz.hasOwnProperty('b');        //false


// Q3


function extend(destination) {
  var objects = [].slice.call(arguments).slice(1);
  objects.forEach(function(object) {
    var objectProps = Object.getOwnPropertyNames(object);
    objectProps.forEach(function(prop) { destination[prop] = object[prop]; });
  });
  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },
	  
  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();                // "Hello, Joe"