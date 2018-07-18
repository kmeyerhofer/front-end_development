var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function add(previousValue, element) {
  return previousValue + element;
}

function calculateArea(rectArray) {
  var areas = rectArray.map(function (rectangle) {
    return rectangle[0] * rectangle[1];
  });
  return areas;
}

function totalArea(rectArray) {
  var areas = calculateArea(rectArray);
  return areas.reduce(function (sum, area) {
    return sum + area;
  });
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function (rectangle) {
    return rectangle[0] === rectangle[1];
  });

  var areas = calculateArea(squares);

  return areas.reduce(function (sum, area) {
    return sum + area;
  });
}
