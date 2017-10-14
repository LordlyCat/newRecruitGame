const path = require('path');
var glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/js/index.js',
        count: './src/js/count.js',
        playing: './src/js/playing.js',
        end: './src/js/end.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 5566 //,
        //hot: false
    },
    plugins: [
        //new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['common', 'index', 'count', 'play']
        }),
        new HtmlWebpackPlugin({
            title: '',
            //favicon: './src/favicon.ico',
            template: path.resolve(__dirname, './src/view/index.html'),
            filename: './view/index.html',
            inject: true,
            hash: true,
            chunks: ['common', 'index'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            title: '',
            //favicon: './src/favicon.ico',
            template: path.resolve(__dirname, './src/view/count.html'),
            filename: './view/count.html',
            inject: true,
            hash: true,
            chunks: ['common', 'count'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            title: '',
            //favicon: './src/favicon.ico',
            template: path.resolve(__dirname, './src/view/playing.html'),
            filename: './view/playing.html',
            inject: true,
            hash: true,
            chunks: ['common', 'playing'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            title: '',
            //favicon: './src/favicon.ico',
            template: path.resolve(__dirname, './src/view/end.html'),
            filename: './view/end.html',
            inject: true,
            hash: true,
            chunks: ['common', 'end'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.html$/,
            use: 'html-withimg-loader'
        }, {
            test: /\.(png|jpg)$/,
            use: 'url-loader?limit=8192'
        }, {
            test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
            use: [
                //'url?limit=51200&name=img/[hash:8].[name].[ext]',
                //'src/img?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    }

};