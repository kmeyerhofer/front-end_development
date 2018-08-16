// input:
// Odd integer, 7 or greater
//
// output:
// 8 pointed star.
// 7 x 7 grid
// *__*__* [1, 2, 1, 2, 1]
// _*_*_*_ [1, 1, 1, 1, 1, 1, 1]
// __***__ [2, 3, 2]
// ******* [7]
// __***__ [2, 3, 2]
// _*_*_*_ [1, 1, 1, 1, 1, 1, 1]
// *__*__* [1, 2, 1, 2, 1]
//
//
// 9 x 9 grid
// *___*___*
// _*__*__*_
// __*_*_*__
// ___***___
// *********
// ___***___
// __*_*_*__
// _*__*__*_
// *___*___*
//


function repeat(char, times) {
  var repeated = '';
  var i;

  for (i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

function buildStarRow(spacesBetween, spacesPadding) {
  var asterisks = ['*', '*', '*'];
  var starRow = asterisks.join(repeat(' ', spacesBetween));
  var paddedStarRow = repeat(' ', spacesPadding) + starRow;

  return paddedStarRow;
}

function star(n) {
  var middleIdx = Math.floor(n / 2);
  var spacesBetween;
  var spacesPadding;
  var i;

  for (i = 0; i < middleIdx; i += 1) {
    spacesBetween = ((n - 3) / 2) - i;
    spacesPadding = i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }

  console.log(repeat('*', n));

  for (i = 0; i < middleIdx; i += 1) {
    spacesBetween = i;
    spacesPadding = ((n - 3) / 2) - i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
}
