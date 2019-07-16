const fs = require('fs')

class GoogleCategoryConverter {
  constructor(locales) {
    this.locales = locales;
  }

  getCategories(categoryNumber) {
    var obj = JSON.parse(fs.readFileSync("taxonomy.json", 'utf8'));
    return obj[categoryNumber];
  }

}


// console.log(GoogleCategoryConverter(141))

// console.log(txtToJson("taxonomy.txt"));

// const plpl = new GoogleCategoryConverter("taxonomy.txt");
// console.log(GoogleCategoryConverter.txtToJson('taxonomy.txt'));

// const locales = { "pl_PL":  "taxonomy.json" };
// const converter = new GoogleCategoryConverter(locales);

// console.log(converter.getCategories(3578));
module.exports = GoogleCategoryConverter;