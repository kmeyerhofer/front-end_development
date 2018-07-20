function compareVersions(version1, version2) {
  var stringV1 = String(version1);
  var stringV2 = String(version2);
  if (notAllowedChar(stringV1) || notAllowedChar(stringV2)) {
    return null;
  }

  var splitV1 = stringV1.split('.');
  var splitV2 = stringV2.split('.');

  var i;
  var longestStringLength = longestString(stringV1, stringV2);
  var counter = 0;
  for (i = 0; i < longestStringLength; i += 1) {
    oneValue = splitV1[i] || 0;
    twoValue = splitV2[i] || 0;
    if (oneValue > twoValue) {
      counter += 1;
    } else if (twoValue > oneValue) {
      counter -= 1;
    } else {
      counter += 0;
    }
    if (counter !== 0) {
      return counter;
    }
  }
  return counter;
}

function longestString(string1, string2,) {
  // return string1.length < string2.length ? string2.length : string1.length;
  return Math.max(string1.length, string2.length);
}

function notAllowedChar(string) {
  var matchedString = string.match(/\D/g);
  return !!matchedString ? matchedString.some(function(item) {
    return item !== '.';
  }) : !!matchedString;
}

// Input
Number with decimals within.
non number characters
no decimal numbers

// output
1 > 2, 1
1 < 2, -1
equal, 0
null if contains bad numbers

//strategy

convert numbers to strings.
split strings on decimals
compare each section delimited by decimals.
guard clause for non-decimal numbers
