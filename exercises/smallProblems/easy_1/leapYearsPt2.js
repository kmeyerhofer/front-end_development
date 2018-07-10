function isLeapYear(year) {
  if (year > 1752) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  } else {
    return year % 4 === 0;
  }
}
