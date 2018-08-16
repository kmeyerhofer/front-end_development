function getDefiningObject(object, propKey) {
  // ...
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }
  return object;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null


//


function shallowCopy(object) {
  var result = Object.create(Object.getPrototypeOf(object));
  var prop;
  for (prop in object) {
    if (object.hasOwnProperty.call(object, prop)) {
      result[prop] = object[prop];
    }
  }
  return result;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // "c is 3"
baz.hasOwnProperty('a');  //false
baz.hasOwnProperty('b');  //false


//


function extend(destination) {
  var objects = [].slice.call(arguments).slice(1);
  objects.forEach(function(object) {
    Object.keys(object).forEach(function(props) {
      destination[props] = object[props];
    });
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