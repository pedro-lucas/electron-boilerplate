'use strict';

const electron = require('electron');
const {app, BrowserWindow} = electron;

let win;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {

  const workAreaSize = electron.screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({width: workAreaSize.width, height: workAreaSize.height, minWidth: 400, minHeight: 400, show: false});

  win.on('closed', () => {
    win = null
  });

  win.once('ready-to-show', () => {
    win.show()
  });

  win.loadURL(`file://${__dirname}/static/index.html`);

});
