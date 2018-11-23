var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('../package.json');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: ['lodash']
  },
  output: {
    filename: "./[name].bundle.js"
  },
  watch:true,
  resolve: { extensions: [".js", ".ts"] },
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
