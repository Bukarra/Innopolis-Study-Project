const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
        single: './src/single-film.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpe?g|svg|ttf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                localIdentContext: path.resolve(__dirname, 'src'),
                                exportLocalsConvention: 'camelCase',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'src/assets/img', to: 'img' }],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'public', 'index.html'),
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'public', 'single.html'),
            filename: 'single/index.html',
            chunks: ['single'],
        }),
    ],
};
