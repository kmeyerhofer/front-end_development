// input
// string, odd or even
//
// output
// center character if odd, center 2 characters if even
//
// algorithm:
// utilize slice
// if odd: Math.floor(length / 2 + 1)
// if even: string.slice(length/2 - 1, 2)


function centerOf(string) {
  var halfLength = Math.floor(string.length / 2);
  if (string.length % 2 === 1) {
    return string[halfLength];
  } else {
    return string.slice(halfLength - 1, halfLength + 1);
  }
}

centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"
