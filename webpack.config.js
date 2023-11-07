const path = require('path');

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
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'bin')
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        },
        compress: true,
        port: 7777
    }
};