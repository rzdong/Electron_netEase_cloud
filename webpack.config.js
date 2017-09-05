var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var path = require('path');

module.exports = {
    entry: './buildEntry/reactApp.js',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'index.js'
    },
    resolve: { //能不带js[x]后缀引用
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [ //webpack2必须加exclude
            { test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader', query: {presets: ['es2015', 'react']}},
            { test: /\.css$/, exclude: /node_modules/, loaders: 'style-loader!css-loader' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, exclude: /node_modules/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"首页",

            template:'./buildEntry/index.html',

            filename: 'index.html',

            minify: {
                // removeComments: true,               //去注释
                // collapseWhitespace: true,           //压缩空格
                // removeAttributeQuotes: true         //去除属性引用
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false, /*紧凑输出*/ 
            comments: false, /*删除注释*/ 
            compress: {
                //warnings: false, /*删除没有用到的代码不输出警告 */
                //drop_console: true, /*删除所有的console */
                //collapse_vars: true, /*内嵌定义了但是只用到一次的变量 */
                //reduce_vars: true /*提取出出现多次但是没有定义成变量去引用的静态值 */
            }
        }),
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        })
    ]
}