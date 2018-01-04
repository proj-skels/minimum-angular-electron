import * as Electron from 'electron';
import * as path from 'path';
import * as url from 'url';

/**
 * Creates a Typescript class to encapsulate the "main" logic of a basic Electron app.
 */
class ElectronApp {

  private app: Electron.App = Electron.app;
  private mainWindow : Electron.BrowserWindow;

  public start() {
    this.setupAppLifecycleHooks();
  }

  /**
   * This will hook into the Electron lifecycle allowing us to safely respond
   * to events to create, destroy and recreate our app.
   */
  private setupAppLifecycleHooks() {

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    this.app.on('ready', this.createWindow);

    // Quit when all windows are closed.
    this.app.on('window-all-closed', () => {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if ( process.platform !== 'darwin') {
        this.app.quit()
      }
    });

    this.app.on('activate', () => {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if ( this.mainWindow === null ) {
        this.createWindow();
      }
    });

  }

  /**
   * Build the display window for our app and handle some related events.
   */
  private createWindow() {

    // Create the browser window.
    this.mainWindow = new Electron.BrowserWindow({
      width: 800,
      height: 600
    });

    // and load the index.html of the app.
    this.mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Emitted when the window is closed.
    this.mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      this.mainWindow = null
    })

  }

}

/**
 * Create an instance of our app and run it.
 */
new ElectronApp().start();


