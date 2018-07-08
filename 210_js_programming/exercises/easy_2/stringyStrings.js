function stringy(integer) {
  var alternatingString = '';
  var count;
  for (count = 1; count <= integer; count++) {
    if (count % 2 === 0) {
      alternatingString += '0';
    } else {
      alternatingString += '1';
    }
  }
  return alternatingString;
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
