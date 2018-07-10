function outputDayOfWeek(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function dateSuffix(num) {
  var suffix = 'th';
  var dateString = String(num);
  var digit;

  if (dateString.length == 1) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(num) + suffix;
}

console.log('Today\'s date is ' + outputDayOfWeek(today) + ' the ' + today.getDate() + 'th');
