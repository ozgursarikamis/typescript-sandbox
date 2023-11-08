const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let production = process.env.NODE_ENV === 'production';

let config = {
    entry: ['./src/index.js', './src/other.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "inline-source-map",
    mode: 'development',
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: '/\.js$/', // regex
                exclude: /node_modules/, // ignore node_modules folder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // source html
        }),
    ],
};

if (production) {
    config.mode = 'production';
    config.devtool = "inline-source-map";
}

module.exports = config;