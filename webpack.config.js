const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract css to files
const CopyPlugin = require('copy-webpack-plugin'); // copy files to dist folder
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // analyze bundle size

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
        watchFiles: ['src/**/', 'index.html', 'src/**/*.scss'],
        static: './dist',
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000/',
        //         pathRewrite: {'^/api' : ''}
        //     }
        // }
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
                use: ['ts-loader', path.resolve("./src/gen-loader/index.js")]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                // style-loader puts the css in the JS bundle.
                // removing that to use the plugin instead
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'pictures/logos/[hash]-[name][ext]'
                }
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
        new MiniCssExtractPlugin({ filename: 'bundle.css'}),
        // new CopyPlugin({
        //     patterns: [
        //         { from: './src/images', to: 'images' },
        //     ]
        // })
        // new BundleAnalyzerPlugin(),
    ],
};

if (production) {
    config.mode = 'production';
    config.devtool = "inline-source-map";
}

module.exports = config;