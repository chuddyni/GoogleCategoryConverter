const app = require('../app');
const assert = require('assert');
const should = require('should')

const locales = { "path": "./ceneo.xml" };
const converter = new app(locales);


describe('Converter', function () {
    describe('#testy()', function () {
        it('for a bad path XML should throw an error', function (done) {
            try {
                var locales = { "path": "../ASDbadNAME.json" };
                var converter = new app(locales);
                expect(converter).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
        it('for XML in bad format', function (done) {
            try {
                var locales = { "pl_PL": "../taxonomy.txt" };
                var converter = new app(locales);
                expect(converter).to.throw(Error);
            }
            catch (error) {
                done();
            }
        });
    });
});
