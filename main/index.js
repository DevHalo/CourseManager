import { app, BrowserWindow } from 'electron';
let mainWindow;

const isDevMode = process.env.NODE_ENV !== 'production'

const createWindow = () => {

  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: { nodeIntegration: true }
  });

  let name = require('../package.json').productName;
  let version = require('../package.json').version;
  mainWindow.setTitle(name + " - " + version);

  if (isDevMode) { mainWindow.webContents.openDevTools(); }
  mainWindow.loadFile(`build/render/index.html`);



  mainWindow.on('closed', () => { mainWindow = null; });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit(); } });
app.on('activate', () => { if (mainWindow === null) { createWindow(); } });