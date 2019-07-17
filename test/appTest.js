var app = require('../app');
var assert = require('assert');
var should = require('should')

var locales = { "pl_PL": "../taxonomy.json" };

var converter = new app(locales);

// console.log(converter.getCategories(3578));


describe('Converter', function () {
    describe('#testy()', function () {
        it('for 3578 he should return tables of 4 elements', function () {
            var categories = converter.getCategories(3578);
            var expectatios = 4;
            assert.equal(categories.length, expectatios)
        });
        it('for 3578 he should return a table of 2 elements after passing level 2', function () {
            var categories = converter.getCategories(3578, { level: "2" });
            var expectatios = 2;
            assert.equal(categories.length, expectatios)
        });
        it('for 3578 he should return tables of 4 elements after passing level 5 (greater than actual size)', function () {
            var categories = converter.getCategories(3578, { level: "5" }).length;
            var expectatios = 4;
            assert.equal(categories, expectatios)
        });
        it('for a key that is not present in JSON, it should throw an error', function (done) {
            try {
                var categories = converter.getCategories(123123123, { level: "5" });
                expect(categories).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('for a bad work path JSON should throw an error', function (done) {
            try {
                var locales = { "pl_PL": "../ASDbadNAME.json" };
                var converter = new app(locales);
                expect(converter).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('for JSON in bad format', function (done) {
            try {
                var locales = { "pl_PL": "../taxonomy.txt" };
                var converter = new app(locales);
                expect(converter).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('for no context (no number in the constructor)', function (done) {
            try {
                var categories = converter.getCategories();
                expect(categories).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
    });
});
