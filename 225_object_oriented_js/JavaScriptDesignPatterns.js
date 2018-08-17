function createCar(make, model, year) { // Factory
  var o = new Object();
  o.make = make;
  o.model = model;
  o.year = year;
  o.sayCar = function() {
    alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
  };
  return o;
}
var johnCar = createCar('Ford', 'F150', '2011'),
    janeCar = createCar('Audi', 'A4', '2007');    
janeCar.sayCar();

function Car(make, model, year) { // Constructor Pattern
  this.make = make;
  this.model = model;
  this.year = year;
  this.sayCar =function() {
    alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
  };
}
var johnCar = new Car('Ford', 'F150', '2011'),
janeCar = new Car('Audi', 'A4', '2007');
janeCar.sayCar();

function Car(make, model, year) { // Combination Constructor/Prototype Pattern
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.sayCar = function() {
  alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
};
var johnCar = new Car('Ford', 'F150', '2011'),
janeCar = new Car('Audi', 'A4', '2007');
janeCar.sayCar();

function Car(make, model, year) { // Dynamic Prototype Pattern
  this.make = make;
  this.model = model;
  this.year = year;
  if(typeof this.sayCar !== "function") {
    Car.prototype.sayCar = function() {
      alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    }
  }
}
var johnCar = new Car('Ford', 'F150', '2011'),
janeCar = new Car('Audi', 'A4', '2007');
janeCar.sayCar();

var Car = { // OLOO (Object Linking to Other Objects) Pattern
  init: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  },
  sayCar: function() {
    alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
  }
};
var johnCar = Object.create(Car),
    janeCar = Object.create(Car);
    
johnCar.init('Ford', 'F150', '2011');
janeCar.init('Audi', 'A4', '2007');
janeCar.sayCar();

function Car(make, model, year) { // Parasitic Constructor Pattern
  var o = new Object();
  o.make = make;
  o.model = model;
  o.year = year;
  o.sayCar = function() {
    alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
  };
  return o;
}
var johnCar = new Car('Ford', 'F150', '2011'),
janeCar = new Car('Audi', 'A4', '2007');
janeCar.sayCar();

function Car(make, model, year) { // Durable Constructor Pattern
  var o = new Object(); 
  var condition = 'used';
  o.sayCar = function(){
    alert('I have a ' + condition + ' ' + year + ' ' + make + ' ' + model + '.');
  };
  return o;
}
var johnCar = Car('Ford', 'F150', '2011'),
janeCar = Car('Audi', 'A4', '2007');
janeCar.sayCar();