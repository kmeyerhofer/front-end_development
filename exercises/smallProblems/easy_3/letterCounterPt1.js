function wordSizes(string) {
  var countObj = {};
  if (string.length === 0) {
    return countObj;
  }
  string.split(' ').forEach(function(word) {
    if (countObj[word.length] !== undefined) {
      countObj[word.length] += 1;
    } else {
      countObj[String(word.length)] = 1;
    }
  });
  return countObj;
}



wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
