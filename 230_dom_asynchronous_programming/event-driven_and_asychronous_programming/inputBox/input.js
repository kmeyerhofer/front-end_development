var cursorInterval;
var focusedTextField;

document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');

  textField.addEventListener('click', function(event) {
    // event.stopPropogation();
    focusedTextField = textField;
    textField.classList.add('focused');
    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', function(event) {
    clearInterval(cursorInterval);
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
    focusedTextField = null;
  }, true);

  document.addEventListener('keypress', function(event) {
    if (focusedTextField) {
      var contentDiv = focusedTextField.querySelector('.content');
      contentDiv.textContent = contentDiv.textContent + event.key;
    }
  });
});
