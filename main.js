const {app, BrowserWindow} = require('electron')

app.on('ready', function createWindow () {
    // 可以创建多个渲染进程
    let win1 = new BrowserWindow({
        width: 1024,
        height: 768
    })

    let win2 = new BrowserWindow({
        width: 1024,
        height: 768
    })

    // 渲染进程中的web页面可以加载本地文件
    win1.loadFile('index.html')

    // 也可以加载远程页面
    win2.loadURL('http://www.baidu.com')

    // 记得在页面被关闭后清除该变量，防止内存泄漏
    win1.on('closed', function () {
        win1 = null
    })
    win2.on('closed', () => {
        win2 = null
    })

})

// 页面全部关闭后关闭主进程，这里在不同平台可能有不同的处理方式，这里不深入研究
app.on('window-all-closed', () => {
    app.quit()
})