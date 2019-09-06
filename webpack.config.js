const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = [
    {
        mode: devMode ? 'development' : 'production',
        target: 'electron-main',
        entry: './main/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build', 'main'),
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                use: 'babel-loader',
            }],
        },
    },
    {
        mode: devMode ? 'development' : 'production',
        devtool: devMode ? false : 'source-map',
        target: 'electron-renderer',
        entry: './render/index.jsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build', 'render'),
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './render/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },
];
