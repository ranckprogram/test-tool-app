const fs = require('fs')

function updateFileMatchPlace(file, params, callback) {
    const fileStr = fs.readFileSync(file, 'utf8')

    // 多个字符创匹配
    const regStr = params.map(item => item.key).join('|');
    const reg = new RegExp(`(${regStr})`, 'g')
    const newFileStr = fileStr.replace(reg, function (a, b, c) {
        const param = params.filter(item => item.key === a)[0]
        return `${a}\n${param.value}`
    })
    fs.writeFileSync(`${file}-change.txt`, newFileStr)
}

exports.updateFileMatchPlace = updateFileMatchPlace