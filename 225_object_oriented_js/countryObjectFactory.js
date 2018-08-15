function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      var visitedString;
      visitedString = this.visited ? ' I have visited ' + this.name : ' I have not visited ' + this.name;
      return this.name + ' is located in ' + this.continent + '.' + visitedString;
    },
    visitCountry: function() {
      this.visited = true;
    },
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

chile.getDescription();
canada.getDescription();
southAfrica.getDescription();
