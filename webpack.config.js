const path = require('path')

module.exports = {
    entry: {
        ProReLedge: './src/INDEX.js'
    },
    output: {
        path: path.resolve(__dirname, 'ProReLedge_build'),
        filename: '[name].js'
    },
    mode: 'development',
    devtool : "inline-source-map",
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/,
                    /\.test.js$/
                ]
            }
        ]
    }
}