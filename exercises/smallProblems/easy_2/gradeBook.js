function grades(num) {
  if (num >= 90 && num <= 100) {
    return 'A';
  } else if (num >= 80 && num < 90) {
    return 'B';
  } else if (num >= 70 && num < 80) {
    return 'C';
  } else if (num >= 60 && num < 70) {
    return 'D';
  } else if (num >= 0 && num < 60) {
    return 'F';
  }
}

function getGrade(one, two, three) {
  var average = (one + two + three) / 3;
  return grades(average);
}
