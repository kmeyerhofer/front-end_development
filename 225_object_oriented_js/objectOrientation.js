function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function(value) {
      if (value >= 0) {
        this.price = value;
      } else {
        alert('Price is invalid.');
      }
    },
    describe: function() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };
}
var scissors = createProduct(0, 'Scissors', 8, 10);
var drill = createProduct(1, 'Cordless Drill', 15, 45);
var hammer = createProduct(2, 'Hammer', 23, 7.50);
var paint = createProduct(3, 'Paint', 7, 14.99);
var screwdriver = createProduct(4, 'Screwdriver', 15, 3.78);


{
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
  setPrice: function(value) {
    if (value >= 0) {
      this.price = value;
    } else {
      alert('Price is invalid.');
    }
  },
  describe: function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },
};

var drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
  setPrice: function(value) {
    if (value >= 0) {
      this.price = value;
    } else {
      alert('Price is invalid.');
    }
  },
  describe: function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: ' + this.price);
    console.log('Stock: ' + this.stock);
  },
};
