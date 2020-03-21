const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');

module.exports = ({ prod = false, mock = false } = {}) => ({
    mode: prod?"production" : "development",
    devtool: "source-map",
    entry: {
        index: './src',
        feature: './src',
        example: './examples'
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/index.html',
            title: '',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'feature.html',
            template: './src/template/index.html',
            title: 'Feature',
            chunks: ['feature']
        }),
        new htmlWebpackPlugin({
            filename: 'example.html',
            template: './src/template/index.html',
            title: 'Example',
            chunks: ['example']
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: 'eslint-loader',
            //     exclude: /node_module/
            // },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        before: app => mock && apiMocker(app, path.resolve(__dirname, './mock')),
        historyApiFallback: {
            rewrites: [
                { from: /^\/index$/, to: '/index.html' },
                { from: /^\/index\/.*/, to: '/index.html' },
                { from: /^\/feature$/, to: '/feature.html' },
                { from: /^\/feature\/.*/, to: '/feature.html' }
            ]
        }
    }
});