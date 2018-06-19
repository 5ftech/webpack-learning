var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.output.path = path.join(__dirname, '../dist/sit');
config.output.publicPath = '/igi/touw_sit/';
config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"sit"',
    'ENV_HOST': '""',
});

module.exports = config;
