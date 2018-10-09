function callback1() {
  console.log('callback 1');
}

function callback2() {
  console.log('callback 2');
}

function callback3() {
  console.log('callback 3');
}

function randomizer(callbacks) {
  let secondsElapsed = 0;
  let randomLimit = arguments.length * 2;
  let timeLogger = setInterval(function() {
    secondsElapsed += 1;
    console.log(secondsElapsed);
    if (secondsElapsed >= randomLimit) {
      clearInterval(timeLogger);
    }
  }, 1000);
  for (let i = 0; i < arguments.length; i += 1) {
    let callback = arguments[i];
    let randomTime = Math.floor(Math.random() * randomLimit * 1000);
    setTimeout(callback, randomTime);
    console.log(callback.name + "'s delay: " + randomTime + 'ms');
  }
}

randomizer(callback1, callback2, callback3);
randomizer(callback2, callback3);
randomizer(callback3);
