const { app, BrowserWindow, Menu } = require('electron')
const menuConfig = require('./src/menu')
var event = require('./src/event.js')
const ipc = require('electron').ipcMain

ipc.on('synchronous-message', function (event, arg) {
  event.returnValue = 'pong'
})

function createWindow() {
  let windowOptions = {
    // transparent: true,
    // frame: false,
    width: 800, 
    height: 600,
    transparent: true,
    title: app.getName(),
    webPreferences: {
      nodeIntegration: true
    }
  }

  if (process.platform === 'linux') {
    windowOptions.icon = path.join(__dirname, '/app/ico/your-ico.png')
  }

  mainWindow = new BrowserWindow(windowOptions);
  // mainWindow.maximize()

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

  console.dir(222)

  event.on('onChangeFile', function (f) { console.log(f) })

})

app.on('window-all-closed', () => {
  app.quit()
})