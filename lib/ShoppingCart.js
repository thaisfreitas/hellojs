var ShoppingCart = function() {
  var items = [];
  var add = function(item) {
    items.push(item);
  };

  return {
    items: items,
    add: add
  };
};

module.exports = ShoppingCart;
