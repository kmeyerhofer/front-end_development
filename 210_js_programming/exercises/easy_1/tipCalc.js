function calculateTip() {
  var bill = parseInt(prompt('Enter bill amount:'));
  var tipPercent = parseInt(prompt('Enter the tip percentage:')) / 100;
  var tip = bill * tipPercent;
  var total = tip + bill;
  console.log('The tip is $' + tip.toFixed(2));
  console.log('The total is $' + total.toFixed(2));
}
