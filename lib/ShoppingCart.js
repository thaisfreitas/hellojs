var ShoppingCart = function() {
  var items = [];
  var add = function(item) {
    items.push(item);
  };

  var reset = function() {
    console.log('antesss ------ ' +items.length);
    items = [];
    console.log('depois ------ '+items.length);
  };

  return {
    items: items,
    add: add,
    reset: reset
  };
};

module.exports = ShoppingCart;
