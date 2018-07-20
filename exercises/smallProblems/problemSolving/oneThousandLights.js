// Input
//  number of lights & repetitions
//
// output
//  array of "on" switches
//
// algorithm
//   use array to store booleans, index is the light number
//  two loops:
//    One loop for the repetitions
//      used as a remainder function of which switch to change
//    one loop for the "light switching"
//      index % repetition === 0, change light
//
//   return a new array with the values pushed in by a forEach
//   LIGHT NUMBER = INDEX + 1
//
//

function lightsOn(num) {
  var i;
  var j;
  var lights = [];
  var returnedLights = [];
  for (i = 1; i <= num; i += 1) {
    for (j = 1; j <= num; j += 1) {
      if (j % i === 0) {
        lights[j] = lights[j] ? false : true;
      }
    }
  }
  lights.forEach(function(item, index) {
    if (item) {
    returnedLights.push(index);
  }
  });
  return returnedLights;
}


lightsOn(5); // [1, 4]
lightsOn(100); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
