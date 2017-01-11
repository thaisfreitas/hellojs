var ShoppingCart = function() {
  var items = [];
  var add = function(item) {
    items.push(item);
  };

  var reset = function() {
    for(var i =0; i <= items.length; i++){
      items.pop();
    }
  };

  return {
    items: items,
    add: add,
    reset: reset
  };
};

module.exports = ShoppingCart;
