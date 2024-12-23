
const { app, session, BrowserWindow, BrowserView, ipcMain, Menu, MenuItem, globalShortcut, remote } = require('electron')
const path = require('path')





function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    // titleBarStyle:"hidden",
    titleBarOverlay: {
      color: '#ffff',
      symbolColor: '#202020',
      height: 30
    },

    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      v8CacheOptions: 'none',//禁用缓存
      allowRunningInsecureContent: true,//允许运行http资源
      webSecurity: false,
    }
  })


  // ipcMain.handle('ping',()=>{pong})
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  return mainWindow;

}

app.whenReady().then(() => {
  const mainWindow = createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  mainWindow.on('closed', () => {
    console.log("closed");
  })
})