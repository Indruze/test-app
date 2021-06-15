const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js',
   publicPath: '/',
 },
 devServer: {
   port: 8080,
   watchContentBase: true
 }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        
        new MiniCssExtractPlugin({
            filename: "App.scss",
            chunkFilename: "App.scss"
        }),
    ]
}