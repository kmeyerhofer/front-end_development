function isBalanced(string) {
  var i;
  var stringArr = string.split('');
  var parenthesisCounter = 0;
  for (i = 0; i < stringArr.length; i += 1) {
    if (stringArr[i] === ')') {
      parenthesisCounter -= 1;
    } else if (stringArr[i] === '(') {
      parenthesisCounter += 1;
    }
    if (parenthesisCounter < 0) {
      return false;
    }
  }
  return parenthesisCounter === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
