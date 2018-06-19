var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.output.path = path.join(__dirname, '../dist/sit');
config.output.publicPath = '/igi/touw_sit/';
config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"sit"',
    'MOBILE_UPLOAD_URL': '"https://hms-uat.test-cignacmb.com/gis_server/sit/opr/nuskin/M"',
    'ENV_HOST': '"https://hms-uat.test-cignacmb.com"',
    'CANCEL_TEST_URL': '"https://t.ihaola.com.cn/partners/zhaoshangdm-a1239dcd-4605-2a18-6a51-b39cf339e1ec/azzs/launching.html?openid="'
});

module.exports = config;
