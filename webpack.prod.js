const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = function(env) {
  return {
    entry: [
      './src/index.js'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          use : 'babel-loader',
          test : /\.js$/
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify("production"),
        API_URL: JSON.stringify("http://aws.janto.es/api/v1")
      })
    ]
  }
}