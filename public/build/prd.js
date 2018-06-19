// 生产环境访问路径 https://igi.cignacmb.com/cmbnt
var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.output.path = path.join(__dirname, '../dist/prd');
config.output.publicPath = '/touw/';

config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"prd"',
    'ENV_HOST': '""',
});

module.exports = config;
