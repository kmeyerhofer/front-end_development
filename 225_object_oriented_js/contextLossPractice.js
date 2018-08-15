var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

var getTurkDescription = turk.getDescription.bind(turk);

logReturnVal(turk.getDescription, turk);


var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();


var foo = {
  a: 0,
  incrementA: function() {
    var increment = function() {
      this.a += 1;
    }.bind(this);
    increment();
    increment();
    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
