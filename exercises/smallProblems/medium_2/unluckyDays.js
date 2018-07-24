function fridayThe13ths(year) {
  var date = new Date(year, 0, 1);
  var yearLength = ((new Date(year, 11, 31) - date) / 86400000) + 1;
  var fri13ths = 0;
  var i;
  for (i = 0; i < yearLength; i += 1) {
    if (date.getDay() === 5 && date.getDate() === 13) {
      fri13ths += 1;
    }
    date.setDate(date.getDate() + 1);
  }
  return fri13ths;
}

// dateVar.getDay(); returns the day of the week 0-6 (Friday = 5)
// dateVar.getDate(); returns the date
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
