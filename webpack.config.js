const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: [
    './scripts/main.js',
    './scripts/c3runtime.js'
  ],
  plugins: [
    new NodePolyfillPlugin()
  ],
  target: 'web',
  resolve: {
    fallback: {
      "fs": false,
      "child_process": false
    }
  },
};