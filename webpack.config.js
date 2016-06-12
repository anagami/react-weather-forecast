var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: './index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ["./src", "node_modules", "bower_components"]
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint']
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /(node_modules|bower_components)/,
                plugins: ['transform-runtime']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'exports?global.Promise!es6-promise'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin('bundle.css', {allChunks: 1})
    ],
    devServer: {
        port: 5555
    }
}

if ( NODE_ENV == 'production' ) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            warnings: false,
            drop_console: true
        })
    )
}