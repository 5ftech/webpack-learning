var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.output.path = path.join(__dirname, '../dist/uat');
config.output.publicPath = '/igi/touw_uat/';
config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"uat"',
    'MOBILE_UPLOAD_URL': '"https://hms-uat.test-cignacmb.com/gis_server/uattouw/opr/touw/M"',
    'ENV_HOST': '"https://hms-uat.test-cignacmb.com"',
    'CANCEL_TEST_URL': '"https://t.ihaola.com.cn/partners/zhaoshangdm-a1239dcd-4605-2a18-6a51-b39cf339e1ec/azzs/launching.html?openid="'
});
module.exports = config;
