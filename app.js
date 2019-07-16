const fs = require('fs')
const util = require('util')

class GoogleCategoryConverter {
  constructor(locales) {
    this.locales = locales;
  }

  getCategories(categoryNumber) {
    var obj = JSON.parse(fs.readFileSync(locales.pl_PL, 'utf8'));
    return obj[categoryNumber];
  }

}


// console.log(GoogleCategoryConverter(141))

// console.log(txtToJson("taxonomy.txt"));

// const plpl = new GoogleCategoryConverter("taxonomy.txt");
// console.log(GoogleCategoryConverter.txtToJson('taxonomy.txt'));

const locales = { "pl_PL":  "taxonomy.json" };
const converter = new GoogleCategoryConverter(locales);
console.log(converter.getCategories(3578));
