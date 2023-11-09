const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let production = process.env.NODE_ENV === 'production';

let config = {
    // entry: ['./src/index', './src/home'], // combine multiple entry points
    entry: { // separate multiple entry points
        index: './src/index.ts',
        home: './src/home.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // clean dist folder before build
    },
    devtool: "inline-source-map",
    mode: 'development',
    devServer: {
        // liveReload: false,
        watchFiles: ['src/**/', 'index.html', 'src/**/css/*.css'], // watch for changes in these files
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
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
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
        // new HtmlWebpackPlugin() // auto generate index.html
    ],
};

if (production) {
    config.mode = 'production';
    config.devtool = "inline-source-map";
}

module.exports = config;