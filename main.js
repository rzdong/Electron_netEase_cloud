const {app, BrowserWindow} = require('electron')
let win
function createWindow(){
  win = new BrowserWindow({width:1150, height:850,frame:false})
  win.loadURL(`file://${__dirname}/index.html`)
  // win.webContents.openDevTools()//开启调试工具
  win.show()
  win.on('close', () => {
      win = null
  })
  // win.on('resize', () => {
  //     win.reload()
  // })
}
app.on('ready', createWindow)
app.on('window-all-cloased', () => {
  if(process.platform !== 'drawin' ){
      app.quit()
  }
})
app.on('activate', () => {
  if(win === null){
      createWindow()
  }
})