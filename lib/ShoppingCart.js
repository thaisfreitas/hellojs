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

  var total = function(){
    var totalPrice = 0;
    var originalLength = items.length;
    for(var i=0; i<originalLength; i++){
      totalPrice += items[i].price;
    }
    return totalPrice;
  };

  return {
    items: items,
    add: add,
    reset: reset,
    total: total
  };
};

module.exports = ShoppingCart;
