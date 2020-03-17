const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ prod = false } = {}) => ({
    mode: prod?"production" : "development",
    devtool: "source-map",
    entry: {
        index: './src/index.js',
        feature: './src/index.js'
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
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'feature.html',
            template: './src/template/feature.html',
            chunks: ['feature']
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