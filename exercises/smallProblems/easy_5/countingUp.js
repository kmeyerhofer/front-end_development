input
number, positive

output
array with all ints between 1 and the argument

algorithm
increment once, push num into array up to num

function sequence(num) {
  var numArr = [];
  var i;
  for (i = 1; i <= num; i += 1) {
    numArr.push(i);
  }
  return numArr;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
