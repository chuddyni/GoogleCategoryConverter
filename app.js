const fs = require('fs')
const util = require('util')

const locales = { "pl_PL": "taxonomy.json" };

// const converter = new GoogleCategoryConverter({ locales });

//TODO Usuwanie niepotrzebnych linii z taxomy



function txtToJson(pathToFileTxt) {
  var data = fs.readFileSync(pathToFileTxt).toString().replace(/>/g, '-').split('\n');

  for (var x = 0; x < data.length; x++) {
    data[x] = data[x].split(' - ');
  }

  var output = {};

  for (var x = 0; x < data.length; x++) { //po tablicy calej
    for (var y = 0; y < data[x].length; y++) { //po elementach w tablicy
      // x [141,Aparaty] y Aparaty
      if (y === 0) {
        output[data[x][0]] = [data[x][1]];
      }
      else if (y >= 2) {
        output[data[x][0]].push(data[x][y]);
      }
    }
  }
  //  fs.writeFileSync('taxonomy.json',util.inspect(output) , 'utf-8')
  return output;
}

function GoogleCategoryConverter(categoryNumber) {
  foundCategory = output[categoryNumber];
  return foundCategory;
}

// console.log(GoogleCategoryConverter(141))

console.log(txtToJson("taxonomy.txt"));
