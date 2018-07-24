function letterPercentages(string) {
  var percentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  var i;
  for (i = 0; i < string.length; i += 1) {
    if (/[a-z]/.test(string[i])) {
      percentages.lowercase += 1;
    } else if (/[A-Z]/.test(string[i])) {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  }
  percentages.lowercase = ((percentages.lowercase / string.length) * 100.00).toFixed(2);
  percentages.uppercase = ((percentages.uppercase / string.length) * 100.00).toFixed(2);
  percentages.neither = ((percentages.neither / string.length) * 100.00).toFixed(2);
  return percentages;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
