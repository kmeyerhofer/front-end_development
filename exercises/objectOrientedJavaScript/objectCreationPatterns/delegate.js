function delegate(obj, method) {
  var remainingArgs = Array.prototype.slice.call(arguments, 2);
  return function() {
    return obj[method].apply(obj, remainingArgs);
  };
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
}

baz.qux('hello');   // logs 'hello test';

foo.bar = function() { console.log('changed'); }

baz.qux();          // logs 'changed'
