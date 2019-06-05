
/**
 * 将excel的sheet合一
*/

function flatSheet(data) {
    let resultArr = []
    data.forEach(element => {
        resultArr = [...resultArr, element.data]
    });
    return resultArr
}

/**
 * 将excel数据装成 header + body 结构
 * isEmpty,是否去空值
*/
function sheetFormat(data, isEmpty) {
    let once = true
    let headerLine
    let bodyList = []
    data.forEach(function (sheets) {
        sheets.data.forEach(function (sheet, index) {
            if (index < 1) {

            } else if (once) {
                headerLine = sheet
                once = false
            } else {
                bodyList.push(sheet)
            }
        })
    })
    return {
        headerLine,
        bodyList
    }
}