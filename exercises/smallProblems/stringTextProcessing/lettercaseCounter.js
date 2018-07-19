function letterCaseCount(string) {
  var lowercase = 0;
  var uppercase = 0;
  var neither = 0;
  string.split('').forEach(function (char) {
    if (/[a-z]/.test(char)) {
      lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      uppercase += 1;
    } else {
      neither += 1;
    }
  });
  return {
    'lowercase':lowercase,
    'uppercase':uppercase,
    'neither':neither,
  };
}
