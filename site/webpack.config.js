const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ prod = false } = {}) => ({
    mode: prod?"production" : "development",
    devtool: "source-map",
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
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
        contentBase: './dist'
    }
});