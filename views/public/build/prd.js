// 生产环境访问路径 https://igi.cignacmb.com/cmbnt
var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.output.path = path.join(__dirname, '../dist/prd');
config.output.publicPath = '/touw/';

config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"prd"',
    'MOBILE_UPLOAD_URL': '"http://igi.cignacmb.com/gis_server/prd/opr/touw/M"',
    'ENV_HOST': '"http://igi.cignacmb.com"',
    'CANCEL_TEST_URL': '"https://www.ihaola.com.cn/partners/zhaoshangdm-a1239dcd-4605-2a18-6a51-b39cf339e1ec/azzs/launching.html?openid="'
});

module.exports = config;
