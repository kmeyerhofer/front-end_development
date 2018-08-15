function makeCounterLogger(num) {
  return function(secondNum) {
    var i;
    if (num >= secondNum) {
      for (i = num; i >= secondNum; i -= 1) {
        console.log(i);
      }
    } else if (num <= secondNum) {
      for (i = num; i <= secondNum; i += 1) {
        console.log(i);
      }
    }
  }
}

var countlog = makeCounterLogger(5);

countlog(8);

countlog(2);



function makeList() {
  var list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length < 1) {
        console.log('The list is empty.');
      } else {
        list.forEach(function(listItem) { console.log(listItem); });
      }
    } else if (list.includes(item)) {
      var index = list.indexOf(item);
      list.splice(index, 1);
      console.log(item + ' removed!');
    } else if (!list.includes(item)) {
      list.push(item);
      console.log(item + ' added!');
    }    
  }
}

var list = makeList();


list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book


function makeMultipleLister(num) {
  return function() {
    var i;
    for (i = num; i < 100; i += num) {
      console.log(i);
    }
  }
}

var lister = makeMultipleLister(13);
lister();



var runningTotal = 0;
function add(num) {
  runningTotal += num;
  console.log(runningTotal);
}
function subtract(num) {
  runningTotal -= num;
  console.log(runningTotal);
}

function later(func, message) {
  return function() {
    func(message);
  };
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning();



function makeList() {
  var items = [];
  return {
    add: function(item) {
      var index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }      
    },
    remove: function(item) {
      var index = items.indexOf(item);
      if (index === -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');        
      }
    },
    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
      items.forEach(function(listItem) { console.log(listItem); });
      }
    },      
  };
}