function greetings(name, workInfo) {
  var fullName = name.join(' ');
  var job = workInfo.title + ' ' + workInfo.occupation;
  console.log('Hello, ' + fullName + '! Nice to have a ' + job + ' around.');
}
