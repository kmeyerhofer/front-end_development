function delay(time, value) {
  setTimeout(function() {
    console.log(value);
  }, time);
}

function delayLog() {
  var i;
  var time = 1000;
  for(i = 1; i < 11; i += 1) {
    delay(time, String(i));
    time += 1000;
  }
}

delayLog();
