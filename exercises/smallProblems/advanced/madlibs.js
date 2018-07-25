function madlibs(template) {
  var adj1 = template['adjectives'][random()];
  var adj2 = template['adjectives'][random()];
  var adj3 = template['adjectives'][random()];
  var noun1 = template['nouns'][random()];
  var noun2 = template['nouns'][random()];
  var noun3 = template['nouns'][random()];
  var verb1 = template['verbs'][random()];
  var verb2 = template['verbs'][random()];
  var adv1 = template['adverbs'][random()];
  var adv2 = template['adverbs'][random()];
  return 'The ' + adj1 + ' brown ' + noun1 + ' ' + adv1 + ' ' + verb1 + ' the ' + adj2 + ' yellow ' + noun2 + ', who ' + adv2 + ' ' + verb2 + ' his ' + noun3 + ' and looks around.';
}

function random() {
  return Math.floor(Math.random() * 5);
}

var template = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly', 'swiftly'],
}
