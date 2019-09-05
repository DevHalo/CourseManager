import { app, BrowserWindow } from 'electron';
import pkg from '../package.json';

let mainWindow;
const isDevMode = process.env.NODE_ENV !== 'production';

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: { nodeIntegration: true },
    });

    mainWindow.setTitle(`${pkg.productName} - ${pkg.version}`);

    if (isDevMode) { mainWindow.webContents.openDevTools(); }

    mainWindow.loadFile('build/render/index.html');
    mainWindow.on('closed', () => { mainWindow = null; });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit(); } });
app.on('activate', () => { if (mainWindow === null) { createWindow(); } });
