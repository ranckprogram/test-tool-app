const fs = require("fs");
const path = require("path");

function updateFileMatchPlace(file, params) {
    return new Promise(function (resolve, reject) {
        try {
            const fileStr = fs.readFileSync(file, 'utf8')
            // 多个字符创匹配
            const regStr = params.map(item => item.key).join('|');
            const reg = new RegExp(`(${regStr})`, 'g')
            const newFileStr = fileStr.replace(reg, function (a, b, c) {
                const param = params.filter(item => item.key === a)[0]
                return `${a}\n${param.value}`
            })
            const newFileName = file.substr(0, file.length-4);
            fs.writeFileSync(path.join(`${newFileName}-change.txt`), newFileStr)
            resolve()
        } catch (e) {
            reject(e)
        }
    })

}

exports.updateFileMatchPlace = updateFileMatchPlace