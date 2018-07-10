function emptySides(width) {
  var drawing = "| ";
  for (var i = 0; i < width; i++) {
    drawing += " ";
  }
  return drawing += " |";
}

function topAndBottom(width) {
  var drawing = "+-";
  for (var i = 0; i < width; i++) {
    drawing += "-";
  }
  return drawing += "-+"
}

function logInBox(string) {
  var width = string.length;
  var framedString = "| " + string + " |"
  var topBottom = topAndBottom(width);
  var sides = emptySides(width);
  
  console.log(topBottom);
  console.log(sides);
  console.log(framedString);
  console.log(sides);
  console.log(topBottom);
}


logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
