var expect = require('chai').expect;
var ShoppingCart = require('../lib/ShoppingCart.js');

describe('ShoppingCart', function() {
  it('starts empty', function() {
    var shoppingCart = ShoppingCart();
    expect(shoppingCart.items.length).to.be.equal(0);
  });
});
