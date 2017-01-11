var expect = require('chai').expect;
var ShoppingCart = require('../lib/ShoppingCart.js');

describe('ShoppingCart', function() {
  var shoppingCart;

  beforeEach(function() {
    shoppingCart = ShoppingCart();
  });

  it('starts empty', function() {
    expect(shoppingCart.items.length).to.be.equal(0);
  });

  describe('add', function() {
    it('adds items to shopping cart', function(){
      var item = { name: 'agua de coco', price: 10 };
      shoppingCart.add(item);
      expect(shoppingCart.items.length).to.be.equal(1);
    });
  });

  describe('reset', function() {
    context('when there is only one item', function() {
      var item;

      beforeEach(function() {
        item = { name: 'agua de coco', price: 10 };
        shoppingCart.add(item);
      });

      it('resets the shopping cart', function() {
        shoppingCart.reset();
        expect(shoppingCart.items.length).to.be.equal(0);
      });
    });

    context('when there are multiple items', function() {
      var itemA, itemB, itemC;
      beforeEach(function (){
        itemA = { name: 'agua de coco', price: 10 };
        itemB = { name: 'cocacola', price: 12 };
        itemC = { name: 'soda', price: 15 };
        shoppingCart.add(itemA);
        shoppingCart.add(itemB);
        shoppingCart.add(itemC);
      });

      it('resets the shopping cart', function() {
        shoppingCart.reset();
        expect(shoppingCart.items.length).to.be.equal(0);
      });
    });
  });
});
