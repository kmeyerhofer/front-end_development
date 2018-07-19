function buyFruit(fruits) {
  var newArr = [];
  fruits.forEach(function(fruitArr) {
    var i;
    for (i = 0; i < fruitArr[1]; i += 1) {
      newArr.push(fruitArr[0]);
    }
  });
  return newArr;
}
