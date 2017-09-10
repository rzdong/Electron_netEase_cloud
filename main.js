const {app, BrowserWindow} = require('electron')
let win
function createWindow(){
  win = new BrowserWindow({
    width:1000, 
    height:650,
    frame:false,
    minWidth:1000,
    minHeight:650,
    transparent:false,
  })
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