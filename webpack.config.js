const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let production = process.env.NODE_ENV === 'production';

let config = {
    entry: {
        index: './app/Communicator.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // clean dist folder before build
    },
    devtool: "inline-source-map",
    mode: 'development',
    devServer: {
        // liveReload: false,
        watchFiles: ['src/**/', 'index.html', 'src/**/*.scss'],
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
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