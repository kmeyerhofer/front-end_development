// Input
// Odd number (n)
//
// output
// A square of (n) characters tall & wide
//
//
//
// algorithm
// Top half = bottom half reversed ()(n - 1) / 2 lines)
// The first line contains only 1 '*' in the center of it
// the next line contains 1 + 2 '*' in the center of that and so on
// until halfway point, which decrements.
//
// use string.repeat() on ' ' and '*'
//
// think of each line as a mirrored version of the other side of the line until 1/2 way
//
// repetitions counter (each line)
// space counter ((n - 1) / 2) - 1
// star counter (1) + 2
//
// spaceCounter + starCounter + spaceCounter
//
// make a top half function (function triangle(spaces, stars))

function diamond(num) {
  var topSpaces = (num - 1) / 2;
  var topStars = 1;
  var bottomSpaces = 1;
  var bottomStars = (num - 2)
  triangleTop(topSpaces, topStars);
  center(num);
  triangleBottom(bottomSpaces, bottomStars);
}

function triangleTop(spaces, stars) {
  var i;
  var lines = spaces;
  for (i = 0; i < lines; i += 1) {
    var line = '';
    line += ' '.repeat(spaces);
    line += '*'.repeat(stars);
    line += ' '.repeat(spaces);
    console.log(line);
    spaces -= 1;
    stars += 2;
  }
}

function triangleBottom(spaces, stars) {
  var i;
  var lines = (stars + 1) / 2;
  for (i = 0; i < lines; i += 1) {
    var line = '';
    line += ' '.repeat(spaces);
    line += '*'.repeat(stars);
    line += ' '.repeat(spaces);
    console.log(line);
    spaces += 1;
    stars -= 2;
  }
}

function center(num) {
  console.log('*'.repeat(num));
}
