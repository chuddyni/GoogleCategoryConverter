var app = require('../app');
var assert = require('assert');
var should = require('should')

var locales = { "pl_PL": "../taxonomy.json" };

var converter = new app(locales);

// console.log(converter.getCategories(3578));


describe('Converter', function () {
    describe('#testy()', function () {
        it('dla 3578 powinien zwrocic tablice 4 elementow', function () {
            var categories = converter.getCategories(3578);
            var expectatios = 4;
            assert.equal(categories.length, expectatios)
        });
        it('dla 3578 powinien zwrocic tablice 2 elementow po podaniu level 2', function () {
            var categories = converter.getCategories(3578, { level: "2" });
            var expectatios = 2;
            assert.equal(categories.length, expectatios)
        });
        it('dla 3578 powinien zwrocic tablice 4 elementow po podaniu level 5 (Wieksze od rzeczywistego rozmiaru)', function () {
            var categories = converter.getCategories(3578, { level: "5" }).length;
            var expectatios = 4;
            assert.equal(categories, expectatios)
        });
        it('dla klucza nie obecnego w JSON powinien wyrzucic error', function (done) {
            try {
                var categories = converter.getCategories(123123123, { level: "5" });
                expect(categories).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('dla zlej sciezki plku JSON powinien wyrzucic error', function (done) {
            try {
                var locales = { "pl_PL": "../ASDbadNAME.json" };
                var converter = new app(locales);
                expect(converter).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('dla JSON w zlym formacie', function (done) {
            try {
                var locales = { "pl_PL": "../taxonomy.txt" };
                var converter = new app(locales);
                expect(converter).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('dla braku podania kontekstu (brak liczby w konstruktorze)', function (done) {
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
