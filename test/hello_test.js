var expect = require('chai').expect;
var greater = require('../lib/greater');

description('Hello script',  function () {
  it('returns hello', function (){
    expect(greater()).to.equal('hello');
  });
});
