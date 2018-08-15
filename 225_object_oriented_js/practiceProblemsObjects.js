var invoices = {
  unpaid: [],
  paid: [],
  add: function(clientName, amountOwed) {
    this.unpaid.push({
      name: clientName,
      amount: amountOwed,
    });
  },
  totalDue: function() {
    var total = 0;
    var i;
    for (i = 0; i < this.unpaid.length; i += 1) {
      total += this.unpaid[i].amount;
    }
    return total;
  },
  payInvoice: function(clientName) {
    var newUnpaid = [];
    var i;
    for (i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === clientName) {
        this.paid.push(this.unpaid[i]);
      } else {
        newUnpaid.push(this.unpaid[i]);
      }
    };
    this.unpaid = newUnpaid;
  },
  totalPaid: function() {
    var total = 0;
    var i;
    for (i = 0; i < this.paid.length; i += 1) {
      total += this.paid[i].amount;
    }
    return total;
  },
};
