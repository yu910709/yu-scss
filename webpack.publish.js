const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');//构建时清理
const CopyWebpackPlugin = require('copy-webpack-plugin');//copy静态文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离样式表
const extractCSS = new ExtractTextPlugin('yuScss.css');//导出css
const extractSass = new ExtractTextPlugin('yuScss.css');//导出sass
const autoprefixer = require('autoprefixer');//补全css各种hack

module.exports = {
    devtool: "cheap-module-source-map",
    entry: {
        plugin: './src/js/plugin.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?importLoaders=1','postcss-loader'],
                    publicPath: "../"
                }),
            },
            {
                test: /\.scss/i,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader'],
                    publicPath: "../"
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env",
                            "stage-3"
                        ]
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=font/[hash:8].[ext]'
                ]
            }
        ]
    },
    plugins: [
        //全局挂载
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        //清理lib
        new CleanWebpackPlugin(['lib']),
        //copy scss 到 lib
        new CopyWebpackPlugin([{
            from: __dirname + '/src/css/plugin.scss',
            to:  __dirname + '/lib/yuScss.scss',
        }]),
        //样式导出配置
        extractSass
    ]
};
