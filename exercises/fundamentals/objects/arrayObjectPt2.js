var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length; // Length will only be 2
}

average(myArray); // Average will be 10
