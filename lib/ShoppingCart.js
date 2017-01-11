var ShoppingCart = function() {
  var items = [];
  var add = function(item) {
    items.push(item);
  };

  var reset = function() {
    items.pop();
  };

  return {
    items: items,
    add: add,
    reset: reset
  };
};

module.exports = ShoppingCart;
