(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function (arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);  // ?


// countdown

function countdown(num) {
  (function(n) {
    for (var i = n; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  })(num);
}

// countdown recursively

function countdown(num) {
  (function count(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
    } else {
      count(n - 1);
    }
  })(num);
}