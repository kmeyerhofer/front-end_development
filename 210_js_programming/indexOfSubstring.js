function indexOf(firstString, secondString) {
  var firstIndex = -1;
  var stringCount = 0;
  var limit = firstString.length - secondString.length;
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < secondString.length; j++) {
      // debugger;
      if (firstString[i + j] === secondString[j]) {
        stringCount++;
      } else {
        break;
      }
    }
        if (stringCount === secondString.length) {
          return i;
        }
      }
    

  return firstIndex;
}

function lastIndexOf(firstString, secondString) {

}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
