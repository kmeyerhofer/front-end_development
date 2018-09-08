var ItemCreator = {
  nameValidator: function(name) {
    return name.replace(/\s/g, '').length >= 5;
  },
  categoryValidator: function(category) {
    return category.length >= 5 && !category.includes(' ');
  },
  quantityValidator: function(quantity) {
    return quantity !== undefined;
  },
  setSKU(name, category) {
    var shortenedName = name.replace(' ', '').slice(0, 3);
    var shortenedCategory = category.slice(0, 2);
    return shortenedName + shortenedCategory;
  },
  init: function(name, category, quantity) {
    if (this.nameValidator(name) && this.categoryValidator(category) && this.quantityValidator(quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = this.setSKU(name, category);
      return this;
    } else {
      return false;
    }
  },
}

var ItemsManager = {
  list: [],
  create: function(name, category, quantity) {
    var item = Object.create(ItemCreator).init(name, category, quantity);
    if (item) {
      this.list.push(item);
    } else {
      return false;
    }
  },
  delete: function(sku) {
    this.list.splice(this.findItemIndex(this.findItem(sku)), 1);
  },
  update: function(sku, object) {
    var updatedItem = this.findItem(sku);
    for (prop in object) {
      updatedItem[prop] = object[prop];
    }
  },
  findItemIndex: function(obj) {
    return this.list.indexOf(obj)
  },
  findItem: function(sku) {
    return this.list.filter(function(item) {
      return item.skuCode === sku;
    })[0];
  },
  items: function() {
    return this.list;
  },
  inStock: function() {
    return this.list.filter(function(item) {
      return item.quantity > 0;
    });
  },
  itemsInCategory: function(cat) {
    return this.list.filter(function(item) {
      return item.category === cat;
    });
  },
}

var ReportsManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },
  createReporter: function(sku) {
    var item = this.items.findItem(sku);
    var result = {
      itemInfo: function() {
        Object.keys(item).forEach(function(key) {
          console.log(key + ': ' + item[key]);
        });
      }.bind(item),
    };
    return result;
  },
  reportInStock: function() {
    var inStockItems = this.items.inStock().map(function(item) {
      return item.name;
    });
    console.log(inStockItems);
  },
}

var ItemManager = Object.create(ItemsManager);
ItemManager.create('Apples', 'grocery', 1);
ItemManager.update('Appgr', {quantity: 2});
var ReportManager = Object.create(ReportsManager);
ReportManager.init(ItemManager);
var kitchen = ReportManager.createReporter('Appgr');
kitchen.itemInfo();
ItemManager.update('Appgr', {quantity: 10});
kitchen.itemInfo();
