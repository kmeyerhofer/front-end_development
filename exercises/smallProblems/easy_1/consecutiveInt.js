function calculateSum(int) {
  var i;
  var sum = 0;
  for (i = 1; i <= int; i++) {
    sum += i
  }
  return 'The sum of the integers between 1 and ' + int + ' is ' + sum + '.'
}

function calculateProduct(int) {
  var i;
  var sum = 1;
  for (i = 1; i <= int; i++) {
    sum *= i
  }
  return 'The product of the integers between 1 and ' + int + ' is ' + sum + '.'
}

function sumOrProduct() {
  var int = parseInt(prompt('Please enter an integer greater than 0:'));
  var selection = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
  if (selection === 's') {
    return calculateSum(int);
  } else if (selection === 'p') {
    return calculateProduct(int);
  } else {
    console.log('Incorrect entry!');
  }
}
