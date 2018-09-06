function newStack() {
  var theStack = [];
  return {
    push: function(item) {
      theStack.push(item);
      return item;
    },
    pop: function() {
      return theStack.pop();
    },
    printStack: function() {
      var i;
      for (i = theStack.length; i > -1; i -= 1) {
        console.log(theStack[i]);
      }
    },
  };
}
