var ShoppingCart = function() {
  var items = [];
  var add = function(item) {
    items.push(item);
  };

  var reset = function() {
    var originalLength = items.length;
    for(var i = 0; i <= originalLength; i++){
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
