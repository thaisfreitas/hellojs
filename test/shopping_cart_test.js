var expect = require('chai').expect;
var ShoppingCart = require('../lib/ShoppingCart.js');

describe('ShoppingCart', function() {
  it('starts empty', function() {
    var shoppingCart = ShoppingCart();
    expect(shoppingCart.items.length).to.be.equal(0);
  });

  describe('add', function() {
    it('adds items to shopping cart', function(){
      var item = { name: 'agua de coco', price: 10 };
      var shoppingCart = ShoppingCart();
      shoppingCart.add(item);
      expect(shoppingCart.items.length).to.be.equal(1);
    });
  });

  describe('reset', function() {
    it('resets the shopping cart', function() {
      var item = { name: 'agua de coco', price: 10 };
      var shoppingCart = ShoppingCart();

      shoppingCart.add(item);
      expect(shoppingCart.items.length).to.be.equal(1);
      shoppingCart.reset();
      expect(shoppingCart.items.length).to.be.equal(0);
    });
  });
});
