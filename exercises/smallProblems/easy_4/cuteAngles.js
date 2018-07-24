function dms(num) {
  var degrees = Math.floor(num);
  var minutes = Math.floor((num - degrees) * 60);
  var seconds = Math.floor((num - degrees - (minutes / 60)) * 3600);
  return degrees + "°" + padZeroes(minutes) + "'" + padZeroes(seconds) + '"';
}

function padZeroes(num) {
  var numString = String(num);
  return numString.length < 2 ? ('0' + numString) : numString;
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
