function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
}

Vehicle.prototype.doors = 4;
Vehicle.prototype.wheels = 4;

var sedan = new Vehicle();
var coupe = new Vehicle();
coupe.doors = 2;

console.log(sedan.hasOwnProperty('doors'));
console.log(coupe.hasOwnProperty('doors'));

function Coupe() {}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Coupe.constructor = Coupe;

function Motorcycle() {
  this.doors = 0;
  this.wheels = 2;
}

Motorcycle.prototype = new Vehicle();

Motorcycle.constructor = Motorcycle;

var motorcycle = new Motorcycle();
var coupe2 = new Coupe();

console.log(coupe2 instanceof Coupe);
console.log(motorcycle instanceof Motorcycle);
console.log(sedan instanceof Coupe);
console.log(sedan instanceof Vehicle);


function Sedan() {
  
}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();
console.log(lesabre instanceof Sedan);
console.log(lesabre instanceof Vehicle);
console.log(new Sedan);


var prototype_car = {
  doors: 5,
  wheels: 3,
};

var ceo_car = Object.create(prototype_car);

console.log(ceo_car);