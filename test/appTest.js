var app = require('../app');
var assert = require('assert');

var locales = { "pl_PL":  "../taxonomy.json" };

var converter = new app(locales);

// console.log(converter.getCategories(3578));


describe('Converter', function() {
  describe('#indexOf()', function() {
    it('dla 3578 powinien zwrocic tablice 4 elementow', function(){
        var categories = converter.getCategories(3578);
        var expectatios = ['Sprzęt sportowy','Rekreacja na świeżym powietrzu','Golf','Chorągiewki golfowe'];          
        assert.equal(categories.length,expectatios.length)
    });
  });
});
