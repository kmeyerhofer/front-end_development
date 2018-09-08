// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  var results = [];
  var self = this;
  while (Object.getPrototypeOf(self) !== Object.prototype) {
    results.push(Object.getPrototypeOf(self));
    self = Object.getPrototypeOf(self);
  }
  results.push(Object.prototype)
  return results;
}

qux.ancestors();  // returns [baz, bar, foo, Object.prototype]
baz.ancestors();  // returns [bar, foo, Object.prototype]
bar.ancestors();  // returns [foo, Object.prototype]
foo.ancestors();  // returns [Object.prototype]
