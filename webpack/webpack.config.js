var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/scripts/app.js",//path relative to this file
  output: {
      filename: "./app.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html'
    })
  ]
}
