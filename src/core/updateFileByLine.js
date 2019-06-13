var fs = require('fs');

var readline = require('readline');

function insertStr(soure, start, newStr) {

    return soure.slice(0, start) + newStr + soure.slice(start);
}

function readFileAsLine({ filePath, process }) {
    return new Promise((resolve, reject) => {
        var fRead = fs.createReadStream(filePath);
        var writePath = insertStr(filePath, filePath.length-4, "-change")
        var writeStream = fs.createWriteStream(writePath);
        var objReadline = readline.createInterface({
            input: fRead
        });
        objReadline.on('line', function (line) {
            process(line, writeStream)
        });
        objReadline.on('close', function () {
            resolve();
        });
    })

}



exports.readFileAsLine = readFileAsLine