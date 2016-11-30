var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './webpack/app.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.s?css$/, loader: 'style!css!sass'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.(jpe?g|png|gif)$/i, loader: "url-loader?name=images/[name].[ext]" },
            { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.htm$/, loaders: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'] }
        ]
    }
}