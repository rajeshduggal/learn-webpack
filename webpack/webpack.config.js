var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/scripts/app.js",//path relative to this file
  output: {
      filename: "./app.bundle.js"
  },
  watch:true,
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
