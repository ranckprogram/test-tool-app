const { app, BrowserWindow, Menu } = require('electron')
const menuConfig = require('./src/menu')
var event = require('./src/event.js')  

function createWindow() {
  let windowOptions = {
    width: 1220,
    height: 780,
    minWidth: 1220,
    minHeight: 780,
    title: app.getName()
  }

  if (process.platform === 'linux') {
    windowOptions.icon = path.join(__dirname, '/app/ico/your-ico.png')
  }

  mainWindow = new BrowserWindow(windowOptions);
  mainWindow.webContents.openDevTools()  // 打开调试工具

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', function () {

  const menu = Menu.buildFromTemplate(menuConfig)
  Menu.setApplicationMenu(menu) // 设置菜单部分
  createWindow()

  event.on('onChangeFile', function(f) {console.log(f)})

})

app.on('window-all-closed', () => {
  app.quit()
})