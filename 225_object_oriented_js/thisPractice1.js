function whatIsMyContext() {
  return this;
}

whatIsMyContext(); // implicit global object, window

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }

    baz();
  }

  bar();
}

foo();

// 2
// 2
// 1
// 2

// 3