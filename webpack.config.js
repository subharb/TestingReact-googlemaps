
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

const path = require('path');
function buildConfig(env) {
  console.log("ENV :"+ Object.keys(env)[0]);
  return require("./webpack." + Object.keys(env)[0] + ".js")(env);
}
module.exports = buildConfig;