const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

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
        devServer: {
            historyApiFallback: true,
            contentBase: './'
        },
        plugins: [
            new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("development"),
            API_URL: JSON.stringify("http://janto5.local/api/v1")
            })
        ]
    }
}
