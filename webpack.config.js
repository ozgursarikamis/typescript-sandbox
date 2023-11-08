const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: "eval-source-map",
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'bin')
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        },
        // compress: true,
        port: 7777,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};