function copyProperties(objOne, objTwo) {
  var copies = 0;
  for (props in objOne) {
    objTwo[props] = objOne[props];
    copies++;
  }
  return copies;
}
