const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 800,
    minHeight: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  // const url = isDev ? 'http://localhost:3000': 'https://?'
  // mainWindow.loadURL(url)

  const filePath = path.resolve(__dirname, 'build', 'index.html')
  console.log(filePath)
  mainWindow.loadFile(filePath)
})