function triangle(one, two, three) {
  if (one + two + three < 180) {
    return 'invalid';
  } else if (one <= 0 || two <= 0 || three <= 0) {
    return 'invalid';
  } else if (one === 90 || two === 90 || three === 90) {
    return 'right';
  } else if (one < 90 && two < 90 && three < 90) {
    return 'acute';
  } else if (Math.max(one, two, three) > 90) {
    return 'obtuse';
  }
}


triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
