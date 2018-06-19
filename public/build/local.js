var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.output.path = path.join(__dirname, '../dist/local');

config.output.publicPath = '/';

config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"sit"',
    'ENV_HOST': '""'
});

module.exports = config;
