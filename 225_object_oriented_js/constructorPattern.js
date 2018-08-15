var prot = {};
var foo = Object.create(prot);

Object.getPrototypeOf(foo) === prot; // true

prot.isPrototypeOf(foo);