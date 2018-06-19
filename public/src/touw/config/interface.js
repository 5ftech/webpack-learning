/**
 * Created by brave on 17/3/28.
 */

var config = require('./config');
require('../res_component/loading/index');

function showLoading() {
    if (window.loading) {
        window.loading.open();
    }
}

function hideLoading() {
    if (window.loading) {
        window.loading.close();
    }
}

var object = {
    post: function (interfaceName, data) {
        var deferred = Deferred();
        showLoading();
        $.ajax({
            url: config.host + config.appName + "/" + interfaceName,
            type: 'post',
            timeout: 180000,
            data: data,
            dataType: 'json',
            success: function (data) {
                hideLoading();
                deferred.resolve(data);
            },
            error: function (res, error) {
                hideLoading();
                alertModal.open('系统请求超时');
                deferred.reject(res);
            }
        });
        return deferred.promise
    },
    postToNoLoading: function (interfaceName, data) {
        var deferred = Deferred();
        $.ajax({
            url: config.host + config.appName + "/" + interfaceName,
            type: 'post',
            timeout: 180000,
            data: data,
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (res, error) {
                alertModal.open('系统请求超时');
                deferred.reject(res);
            }
        });
        return deferred.promise
    }
};



module.exports = object;