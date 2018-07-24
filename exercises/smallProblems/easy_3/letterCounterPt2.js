function wordSizes(string) {
  var countObj = {};
  if (string.length === 0) {
    return countObj;
  }
  string.split(' ').forEach(function(word) {
    var characterLength = word.match(/[a-z]/ig).length
    if (countObj[characterLength] !== undefined) {
      countObj[characterLength] += 1;
    } else {
      countObj[characterLength] = 1;
    }
  });
  return countObj;
}



wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
