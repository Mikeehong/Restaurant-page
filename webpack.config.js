const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        homdpage: './src/homepage.js',
        menu: './src/menu.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
}