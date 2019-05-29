
/**
 *  根据模板excel传来的数据生成table
 *  
*/

function createTable(data) {
    const { headerLine, bodyList } = data
    if (Array.isArray(headerLine)) {
        return createHead(headerLine) + createBody(bodyList, headerLine)
    }
}

function createHead(arr) {
    const thList = arr.map(element => `<th>${element}</th>`);
    return `<thead><tr>${thList.join('')}</tr></thead>`
}

function createBody(bodyList, headerLine) {
    const tdList = bodyList.map(line => (
        Array.isArray(line) && `<tr>${headerLine.map((sigle, index) => `<td>${line[index] || ''}</td>`).join('')}</tr>`
    )).join('');
    return `<tbody>${tdList}</tbody>`
}


