var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    APP_DIR + '/styles/app.less',
    APP_DIR + '/index.jsx',
    
  ],
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js' 
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      { 
        test: /\.json$/, 
        loader: 'json' 
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("css-loader!less-loader")      
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ]  
}

module.exports = config;