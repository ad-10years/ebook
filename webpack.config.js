var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// webpack.config.js
module.exports = {
    entry: {
        browser:"./src/browser/entry.js",
        common:"./src/common/entry.js"
    },
    output: {
        filename: './docs/javascripts/[name].js'
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
        new ExtractTextPlugin('./docs/stylesheets/[name].css'),
    ]
};

