function createInvoice(services) {
  // implement the factory function here
  services = services || {};
  return {
    payments: [],
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    
    total: function() {
      return this.phone + this.internet;
    },
    
    addPayment: function(payment) {
      this.payments.push(payment);
    },
    
    addPayments: function(paymentArr) {
      var self = this;
      paymentArr.forEach(function(item) { self.addPayment(item); });      
    },
    
    amountDue: function() {
      return this.total() - (this.payments.reduce(function(sum, acc) {
        return sum += acc.total()
      }, 0));
    },
  }
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPayment(services) {
  // implement the factory function here
  services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

function paymentTotal(payments) {
  var total = 0;
  var i;
  
  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // 31000

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // 24000
