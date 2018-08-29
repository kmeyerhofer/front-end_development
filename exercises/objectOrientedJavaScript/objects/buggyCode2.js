var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
};

function discountItem(item, percent) {
  var discount = item.price * (percent / 100);
  return item.price - discount;
}

discountItem(item, 20);  // should return 40
discountItem(item, 50);  // should return 25
discountItem(item, 25);  // should return 37.5
