var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.output.path = path.join(__dirname, '../dist/local');

config.output.publicPath = '/';

config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"sit"',
    'MOBILE_UPLOAD_URL': '"https://hms-uat.test-cignacmb.com/gis_server/sit/opr/touw/M"',
    'ENV_HOST': '"https://hms-uat.test-cignacmb.com"'
});

module.exports = config;
