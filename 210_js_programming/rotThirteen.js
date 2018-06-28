function rotThirteen(string) {
  var newString = '';
  var charCode;
  var i;

  for (i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);
    if ((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)) {
      newString += String.fromCharCode(charCode - 13);
    } else if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) {
      newString += String.fromCharCode(charCode + 13);
    } else {
      newString += string[i];
    }
  }
  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
