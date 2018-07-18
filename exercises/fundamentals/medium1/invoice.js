function invoiceTotal() {//(amount1, amount2, amount3, amount4) {
  //return amount1 + amount2 + amount3 + amount4;
  var sum = 0;
  var i;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?
