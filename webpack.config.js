var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
    entry: './buildEntry/reactApp.js',
    output: {
        path: path.join(__dirname, ''),
        filename: 'htmlMain.js'
    },
    resolve: { //能不带js[x]后缀引用
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [ //webpack2必须加exclude
            { test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader', query: {presets: ['es2015', 'react']} },
            { test: /\.css$/, exclude: /node_modules/, loaders: 'style-loader!css-loader' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, exclude: /node_modules/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        title:"首页",

        template:'./buildEntry/index.html',

        filename: 'index.html'
    })
    ]
}