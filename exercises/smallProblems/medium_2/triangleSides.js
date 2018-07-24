function triangle(sideOne, sideTwo, sideThree) {
  var shortestSidesSum = Math.min(sideOne, sideTwo) + Math.min(sideTwo, sideThree);
  var longestSide = Math.max(sideOne, sideTwo, sideThree);
  if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
    return 'invalid';
  } else if (shortestSidesSum < longestSide) {
    return 'invalid';
  } else if (sideOne === sideTwo && sideTwo === sideThree && sideThree === sideOne) {
    return 'equilateral';
  } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
    return 'isosceles';
  } else if (sideOne !== sideTwo && sideTwo !== sideThree && sideThree !== sideOne) {
    return 'scalene'
  }
}



triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
