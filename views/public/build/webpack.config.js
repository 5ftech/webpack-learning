var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// var ipConfig = require('./webpack.ip.config');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

var distEnv = new webpack.DefinePlugin({
    'NODE_ENV': '"uat"',
    'MOBILE_UPLOAD_URL': '"https://hms-uat.test-cignacmb.com/gis_server/sit/opr/ipmi/M"',
    'ENV_HOST': '"https://hms-uat.test-cignacmb.com"',
    'CANCEL_TEST_URL': '"https://t.ihaola.com.cn/partners/zhaoshangdm-a1239dcd-4605-2a18-6a51-b39cf339e1ec/azzs/launching.html?openid="'
});

module.exports = {
    entry: {
        //
        touw_employee_upload: "./src/touw/view/touw/employee_upload/index.js",
    },
    output: {
        path: path.join(__dirname, '../dist/local'),
        publicPath: "/",
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        loaders: [	//加载器
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
            {test: /\.html$/, loader: "html"},
            {test: /\.(png|jpg|jpeg|pdf|gif)$/, loader: 'url-loader?limit=8000&name=./img/[hash].[ext]'},
            {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"}
        ]
    },

    plugins: [
        distEnv,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new webpack.ProvidePlugin({ //前端调试库
            eruda: 'eruda',
            'window.eruda': 'eruda',
        }),
        new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径
        //
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'upload.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'touw_employee_upload'],
            template: './src/touw/view/touw/employee_upload/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new CommonsChunkPlugin({
            name: "common.js",
            minChunks: 10
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],

    devServer: {
        contentBase: '../dist/local',
        disableHostCheck: true,
        proxy: {
            '/gis_server/*': {
                target: 'http://hms-uat.test-cignacmb.com',
                host: 'hms-uat.test-cignacmb.com',
                secure: false,
                onProxyRes: function onProxyRes(proxyRes, req, res) {
                    if (proxyRes.headers.location) {
                        var address = getIpAddress()
                        proxyRes.headers.location = 'http://' + address + ':8050';//重写重定向路径
                    }
                }
            }
        }
    }
};
var getIpAddress = function () {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};


