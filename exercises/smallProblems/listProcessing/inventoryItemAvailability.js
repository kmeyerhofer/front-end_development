var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(num, transactions) {
  return transactions.filter(function(obj) {
    return obj.id === num;
  });
}

function isItemAvailable(num, transactions) {
  var numTransactions = transactionsFor(num, transactions);
  var numQuantity = numTransactions.reduce(function (sum, obj) {
    if (obj.movement === 'in') {
      return sum + obj.quantity;
    } else {
      return sum - obj.quantity;
    }
  }, 0);
  return numQuantity > 0;
}
