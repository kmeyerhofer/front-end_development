function userEntry(partOfSpeech) {
  return prompt('Enter a ' + partOfSpeech + ':');
}

function madlibs() {
  var noun = userEntry('noun');
  var verb = userEntry('verb');
  var adj = userEntry('adjective');
  var adv = userEntry('adverb');
  console.log('Do you ' + verb + ' your ' + adj + ' ' + noun + ' ' + adv + '?');
}
