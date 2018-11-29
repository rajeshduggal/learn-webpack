var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('../package.json');
var path = require('path');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    settings: "./src/scripts/settings.js",
    vendor: ['lodash']
  },
  output: {
    filename: "./[name].bundle.js"
  },
  watch:true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      chunks: ['vendor','app'],
      path: path.join(__dirname, "../dist/"),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Settings',
      template: './src/index.html',
      chunks: ['vendor','settings'],
      path: path.join(__dirname, "../dist/"),
      filename: 'settings.html'
    })
  ]
}
