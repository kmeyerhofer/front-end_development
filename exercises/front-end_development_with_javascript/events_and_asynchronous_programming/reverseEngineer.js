// document.querySelector('html').addEventListener('click', function() {
//   document.querySelector('#container').style = 'display: none';
// });
//
// document.querySelector('#container').addEventListener('click', function(event) {
//   // event.stopPropagation();
// }, true);


document.querySelector('html').addEventListener('click', function() {
  var container = document.querySelector('#container');
  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }

});
