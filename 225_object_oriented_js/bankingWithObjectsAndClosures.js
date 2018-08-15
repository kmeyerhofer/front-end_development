function makeBank() {
  var accountNumber = 101;
  var accounts: [];
  function makeAccount() {
    var balance = 0;
    var number = 0;
    var transactions = [];
    return {
      deposit: function(amount) {
        transactions.push({type: 'deposit', amount: amount});
        return balance += amount;
      },
      withdraw: function(amount) {
        if (amount >= balance) {
          amount = balance;      
        }
        transactions.push({type: 'withdraw', amount: amount});
        balance -= amount;
        return amount;    
      },
      balance: function() {
        return balance;
      },
      number: function() {
        return number;
      },
      transactions: function() {
        return transactions;
      },
    };
  }
  return {
    openAccount: function() {
      var account = makeAccount();
      account.number = accountNumber;
      this.incrementAccount();
      accounts.push(account);
      return account;
    },
    incrementAccount: function() {
      accountNumber += 1;
    },
    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

