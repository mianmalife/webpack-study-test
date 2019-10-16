
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: {
        first: "./bar.js",               //多入口
        second: "./foo.js"
    },
    output: {
        //filename: './[name].js'    // [name]相当于entry里面的键 first second
        path: __dirname + '/dist',
        //filename: '[name].[hash].js'   // [hash]  ===>  first.a359094213028891de6d.js   解决缓存问题
        //filename: 'dist.chunkhash=[chunkhash:10].name=[name].id=[id].js'  //dist.chunkhash=[chunkhash:10].name=[name].id=[id].js
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    plugins: [
        //这里添加插件
        new HtmlWebpackPlugin({
            title: 'my html',
            template: './demo.html'
        })
    ],
    // devServer: {
    //     contentBase: './dist'
    // }
}