function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a - 5);
}

sub5(10);
//

function makeSubN(n) {
  return function(a) {
    return subtract(a - n);
  }
}

var sub5 = makeSubN(5);
sub5(10);
//
function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

multiplyBy5(100);
//

var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(studentsArr) {
    rollCall('Math', studentsArr);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);