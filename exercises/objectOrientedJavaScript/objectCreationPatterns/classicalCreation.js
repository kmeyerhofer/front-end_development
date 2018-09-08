function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};
Person.prototype.communicate = function() {
  return this.fullName() + ' is communicating.';
};
Person.prototype.eat = function() {
  return this.fullName() + ' is eating.';
};
Person.prototype.sleep = function() {
  return this.fullName() + ' sleeping.';
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  return this.fullName() + ' is diagnosing.';
};

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() {
  return this.fullName() + ' is teaching.';
};

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  return this.fullName() + ' is studying.';
}

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function() {
  return this.fullName() + ' is researching.';
}

var person = new Person('foo', 'bar', 21, 'male');
var doctor = new Doctor('foo', 'bar', 22, 'female', 'pediatrics');
var professor = new Professor('Foo', 'Bar', 57, 'female', 'Science of Computer History');
var student = new Student('Foo', 'Bar', 17, 'male', 'Computer History');
var gradS = new GraduateStudent('Foo', 'Bar', 27, 'female', 'Science of History');
