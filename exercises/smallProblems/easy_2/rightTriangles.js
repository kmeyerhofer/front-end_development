function triangle(height) {
  var i;
  var j;
  var k;
  for (i = 1; i <= height; i++) {
    var line = '';
    for (j = 1; j <= height - i; j++) {
      line += " ";
    }
    for (k = 1; k <= i; k++) {
      line += "*";
    }
    console.log(line);
  }
}
