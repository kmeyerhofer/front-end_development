var counterId;

function startCounting() {
  var num = 1;
  counterId = setInterval(function() {
    console.log(num);
    num += 1;
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}
