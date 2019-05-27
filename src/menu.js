const { dialog } = require('electron')
var event = require('./event.js')  

const menuConfig = [
    {
        label: '文件（file）',
        submenu: [
            {
                label: '打开文件',
                click() {
                    dialog.showOpenDialog({
                        title: '请选择文件夹',
                        properties: ['openFile'], // 'openDirectory'  'multiSelections'
                        defaultPath: '/Users/<username>/Documents/',
                        filters: [
                            // { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                            // { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
                            // { name: 'Custom File Type', extensions: ['as'] },
                            { name: 'All Files', extensions: ['*'] }
                        ],
                        function(filepaths) { 
                           
                            event.emit('onChangeFile', filepaths)
                        }
                    })
                }
            },
            {
                label: '打开文件夹',
                click() { require('electron').shell.openExternalSync('https://electronjs.org') }
            },
            {
                label: '退出',
                click() {
                    require('electron').app.quit()
                }
            }
        ]
    }
]

exports = module.exports = menuConfig