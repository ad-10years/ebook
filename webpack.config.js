var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack.config.js
module.exports = {
    entry: {
        browser:"./src/browser/entry.js",
        common:"./src/common/entry.js"
    },
    output: {
        path: __dirname + "/docs",
        filename: './javascripts/[name].[hash:8].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader!postcss-loader' })

            },
        ]
    },
    plugins:[
        new ExtractTextPlugin({ filename: './stylesheets/[name].[hash:8].css', disable: false, allChunks: true }),

        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/index.html', //生成的html存放路径，相对于path
            template: __dirname + '/src/templates/index.html', //html模板路径
            inject:  'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            chunks: ['browser'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })
    ]
};

