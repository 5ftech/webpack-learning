/**
 * Created by zhihaoyao on 2017/4/5.
 */
var interface = require('../../config/interface');
var config = require('../../config/config');

var object = {
    agesAsync: function (birthday, type) {
        var deferred = Deferred();
        var dataToPost = {
            birthday: birthday,
            source: config.source,
            organization_id: config.source,
            type: type
        };
        interface.post("getUserAge", dataToPost)
            .then(function (data) {
                if (data.statusCode == 1) {
                    deferred.resolve(data.data.age);
                } else {
                    deferred.reject(data.msg);
                }
            })
            .otherwise(function (res) {
                deferred.reject('');
            });
        return deferred.promise;
    }
};
module.exports = object;