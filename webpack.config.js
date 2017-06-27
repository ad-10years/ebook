var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm

// webpack.config.js
module.exports = {
    entry: {
        browser:"./src/browser/entry.js",
        innerContent:"./src/common/entry.js"
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
        new CleanWebpackPlugin(["javascripts","stylesheets"],{root:__dirname + "/docs",exclude:  ['vconsole.min.js']}),
        new ExtractTextPlugin({ filename: './stylesheets/[name].[hash:8].css', disable: false, allChunks: true }),
        //browser 外围框架
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
        }),

        //////////////////////////////////////////////////////
        ///////////////// 内容页面生成部分 /////////////////////
        //////////////////////////////////////////////////////

        ///////////////// 起舞弄清影 /////////////////////////
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/起/封面.html',
            template: __dirname + '/src/templates/contents/起/封面.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/起/导语.html',
            template: __dirname + '/src/templates/contents/起/导语.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/起/十年一觉广告梦.html',
            template: __dirname + '/src/templates/contents/起/十年一觉广告梦.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),


        ///////////////// 承 /////////////////////////
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/承/导语.html',
            template: __dirname + '/src/templates/contents/承/导语.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/承/沈伟采访.html',
            template: __dirname + '/src/templates/contents/承/沈伟采访.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/承/周燕采访.html',
            template: __dirname + '/src/templates/contents/承/周燕采访.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/承/钟旭采访.html',
            template: __dirname + '/src/templates/contents/承/钟旭采访.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/contents.html',
            template: __dirname + '/src/templates/contents/contents.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),

        ///////////////// 转 /////////////////////////
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/转/导语.html',
            template: __dirname + '/src/templates/contents/转/导语.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/转/陈汉.html',
            template: __dirname + '/src/templates/contents/转/陈汉.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/转/陈国濠.html',
            template: __dirname + '/src/templates/contents/转/陈国濠.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/转/胡倩苑.html',
            template: __dirname + '/src/templates/contents/转/胡倩苑.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/转/黄汇东.html',
            template: __dirname + '/src/templates/contents/转/黄汇东.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/转/虞晨.html',
            template: __dirname + '/src/templates/contents/转/虞晨.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),

        ///////////////// 合 /////////////////////////
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/合/导语.html',
            template: __dirname + '/src/templates/contents/合/导语.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/合/历届优秀作品·平面类.html',
            template: __dirname + '/src/templates/contents/合/历届优秀作品·平面类.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/合/历届优秀作品·策划类.html',
            template: __dirname + '/src/templates/contents/合/历届优秀作品·策划类.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/合/历届优秀作品·视频类.html',
            template: __dirname + '/src/templates/contents/合/历届优秀作品·视频类.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: __dirname + '/docs/contents/合/广告我爱你.html',
            template: __dirname + '/src/templates/contents/合/广告我爱你.html',
            inject:  'body',
            hash: true,
            chunks: ['innerContent'],
            minify: { //压缩HTML文件
                removeComments: true,
                collapseWhitespace: false
            }
        }),
    ]
};

