function retire() {
  var age = Number(prompt('What is your age?'));
  var retireAge = Number(prompt('At what age would you like to retire?'));
  var date = new Date();
  var currentYear = date.getFullYear();
  var workYears = retireAge - age;
  console.log("It's " + currentYear + '. You will retire in ' + (workYears + currentYear) + '.');
  console.log('You only have ' + workYears + ' years of work to go!');
}
