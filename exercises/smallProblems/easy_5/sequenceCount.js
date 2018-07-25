input:
two integers. first: count, second: starting sequence number

output:
array. (COUNT) numbers, incremented by the sequence,

algorithm:
iterate COUNT times, incrementing the counter by number, push number to array

function sequence(count, start) {
  var result = [];
  var sum = start;
  var i;
  for (i = 0; i < count; i += 1) {
    result.push(sum);
    sum += start;
  }
  return result;
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
