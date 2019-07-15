const path = require('path')

module.exports = {
    entry: './src/INDEX.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'ProReLedge_build'),
        filename: 'ProReLedge.js'
    }
}