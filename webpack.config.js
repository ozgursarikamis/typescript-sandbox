const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'code.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "inline-source-map"
};