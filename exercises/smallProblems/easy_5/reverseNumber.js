// input
// number, positive integer
//
// output
// number, digits reversed, dropping zeroes
//
// algorithm:
// convert to string, split on each char, REVERSE
// map array back to integers and join together

function reverseNumber(num) {
  return Number(String(num).split('').reverse().map(function(char) {
    return char;
  }).join(''));
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
