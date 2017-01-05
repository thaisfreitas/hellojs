var expect = require('chai').expect;
var greater = require('../lib/greater');

describe('Hello script',  function () {
  it('returns hello Thais', function (){
    var greaterInstance =  greater('Thais');
    expect(greaterInstance()).to.equal('hello Thais');
  });
});
