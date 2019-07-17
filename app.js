const fs = require('fs')


class GoogleCategoryConverter {
  constructor(locales) {
    this.locales = locales;
    try {
      this.data = require(locales[Object.keys(locales)[0]]);
    }
    catch (e) {
    }
  }

  getCategories(categoryNumber, level) {
    try {
      var dataLength = this.data[categoryNumber].length;
      if (level && level.level < dataLength) {
        return this.data[categoryNumber].slice(level.level, dataLength);
      } else {
        return this.data[categoryNumber];
      }
    } catch (e) {
    }
  }
}

// const locales = { "pl_PL": "./taxonomy.json" };
// const converter = new GoogleCategoryConverter(locales);
// console.log(converter.getCategories(3578, { level: "2" }));
module.exports = GoogleCategoryConverter;