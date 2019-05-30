const fs = require('fs')
const iconv = require('iconv-lite');


function updateFileMatchPlace(file, params, callback) {
    const fileStr = fs.readFileSync(file, 'utf8')


    // 多个字符创匹配
    console.dir(params)
    const regStr = params.map(item => item.key).join('|');
    const reg = new RegExp(`(${regStr})`, 'g')
    const newFileStr = fileStr.replace(reg, function (a, b, c) {
        const param = params.filter(item => item.key === a)[0]
        console.log(a, b, c, param)
        return `${a}\n${param.value}`
    })
    console.log(newFileStr)
    fs.writeFileSync(`${file}-change.txt`, newFileStr)

}




exports.updateFileMatchPlace = updateFileMatchPlace