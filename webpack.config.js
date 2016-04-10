var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: './index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
                plugins: ['transform-runtime'],
            },
        ]
    },
    plugins: [
        new WebpackNotifierPlugin()
    ],
    devServer: {
        port: 5555
    }
}
