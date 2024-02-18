window.process = {
  platform: "linux",
  execPath: "/",
  mainModule: {
    filename: "/",
  },
};

window.nw = {
  App: {
    clearCache() {},
    manifest: {
      "c3-app-icons": [
        {
          height: 256,
          src: "icons\\icon-256.png",
          width: 256,
        },
      ],
      "c3-stream-mode": true,
      name: "SheepyAShortAdventure",
      version: "1.0.0",
      window: {
        frame: true,
        height: 360,
        icon: "icons/icon-256.png",
        kiosk: false,
        position: "center",
        resizable: true,
        show: true,
        title: "SheepyAShortAdventure",
        width: 640,
      },
    },
  },

  Window: {
    get() {
      return {
        title: "SheepyAShortAdventure",
        x: 0,
        y: 0,
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        },
        on() {},
      };
    },
  },
  
  Clipboard: {
    get() {
      return {
        get() {
          return "";
        },
      };
    },
  },
};
