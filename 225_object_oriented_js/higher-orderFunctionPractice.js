var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function (num) {    
    return num % 2 === 0;
  }
}

var checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

//

function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"
/
//

function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]