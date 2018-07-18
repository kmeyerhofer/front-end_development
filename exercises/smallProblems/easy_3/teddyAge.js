function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function teddyAge() {
  var age = getRandomIntInclusive(20, 200);
  console.log('Teddy is ' + age + ' years old!');
}
