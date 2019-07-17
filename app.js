const fs = require('fs')

class GoogleCategoryConverter {
  constructor(locales) {
    this.locales = locales;
    try {
      this.data = require(locales[Object.keys(locales)[0]]);
    }
    catch(e) {
      console.log("bladblad blad");
      
      console.log(e);
    }
  }

  getCategories(categoryNumber, level) {
    // var obj = JSON.parse(fs.readFileSync(locales[Object.keys(locales)[0]], 'utf8'));
    // return obj[categoryNumber];
    var dataLength = this.data[categoryNumber].length; 
    if (level){
      //sprawdzenie czy oczekiwania tablica jest mniejsza od rzeczywistej tablicy
      if(level.level < dataLength){
        return this.data[categoryNumber].slice(level.level,dataLength);
      }
    }else{
      return this.data[categoryNumber];
    }
  }
}


// console.log(GoogleCategoryConverter(141))

// console.log(txtToJson("taxonomy.txt"));

// const plpl = new GoogleCategoryConverter("taxonomy.txt");
// console.log(GoogleCategoryConverter.txtToJson('taxonomy.txt'));

const locales = { "pl_PL": "./taxonomy.json" };
const converter = new GoogleCategoryConverter(locales);

// console.log(converter.getCategories(3578));

// module.exports = GoogleCategoryConverter;
console.log(converter.getCategories(3578, {level:"1"}));

// console.log(Object.keys(locales)[0]);
