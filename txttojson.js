const fs = require('fs')
const util = require('util')

function txtToJson(pathToFileTxt) {
    var data = fs.readFileSync(pathToFileTxt).toString().replace(/>/g, "-").split("\n");
    // var data = fs.readFileSync(pathToFileTxt).toString().replace(/>/g, "-");
    // data = data.split("\n")
    

    for (var x = 0; x < data.length; x++) {
        data[x] = data[x].split(" - ");

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

    output = JSON.stringify(output);

    //zapis do pliku
    fs.writeFile("taxonomy.json", output, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

txtToJson("taxonomy.txt");