var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.output.path = path.join(__dirname, '../dist/uat');
config.output.publicPath = '/igi/touw_uat/';
config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"uat"',
    'ENV_HOST': '""',
});
module.exports = config;
