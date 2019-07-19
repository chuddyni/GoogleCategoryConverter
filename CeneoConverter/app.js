const fs = require('fs');

class CeneoFeedExporter {
    constructor(path) {
        try {
            this.data = fs.readFileSync(path.path, { encoding: 'utf-8' });
        } catch (error) {
        }
        Array.prototype.removeDuplicates = function () {
            return this.filter(function (item, index, self) {
                return self.indexOf(item) == index;
            });
        };
    }
    getCategories() {
        var DOMParser = require('xmldom').DOMParser;
        var parser = new DOMParser();
        var document = parser.parseFromString(this.data, 'text/xml');
        var nodeListLength = document.getElementsByTagName('o').length;
        var arr = [];

        for (var x = 0; x < nodeListLength; x++) {
            try {
                var nodeList = document.getElementsByTagName('o')[x].nextSibling.firstChild.childNodes[0]['data'];
                arr.push(nodeList);
            } catch (error) {
            }
        }
        arr = arr.removeDuplicates()
        var arrAfterSplit = [];
        for (var x = 0; x < arr.length; x++) {
            arrAfterSplit.push(arr[x].split('/'));
        }
        return arrAfterSplit;
    }
}

const locales = { "path": "./ceneo.xml" };
const converter = new CeneoFeedExporter(locales);
console.log(converter.getCategories());
module.exports = CeneoFeedExporter;