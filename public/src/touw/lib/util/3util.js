var cookie = require('./cookie');
var util = {
    deleteMyOrderCookies: function (type) {
        var deferred = Deferred();
        avalon.log('CONTROLLER:deleteCookies()');
        localStorage.removeItem(type + '-aki-3-myOrder.gender');
        localStorage.removeItem(type + '-aki-3-myOrder.career');
        localStorage.removeItem(type + '-aki-3-myOrder-school_or_institution_name');
        localStorage.removeItem(type + '-aki-3-myOrder.country');
        localStorage.removeItem(type + '-aki-3-myOrder.ic_is_long_valid');
        localStorage.removeItem(type + '-aki-3-myOrder.ic_expiry_day');
        localStorage.removeItem(type + '-aki-3-myOrder.ic_type');
        localStorage.removeItem(type + '-aki-3-myOrder.ic_number');
        localStorage.removeItem(type + '-aki-3-myOrder.mobile_phone_number');
        localStorage.removeItem(type + '-aki-3-myOrder.email');
        localStorage.removeItem(type + '-aki-3-myOrder.marital_status');
        localStorage.removeItem(type + '-aki-3-myOrder.annual_income');
        localStorage.removeItem(type + '-aki-3-myOrder.contact_address');
        localStorage.removeItem(type + '-aki-3-myOrder.insurer_name');
        localStorage.removeItem(type + '-aki-2-relationshipChange');
        deferred.resolve();
        return deferred.promise
    },
    deleteUserInfoCookies: function (type) {
        var deferred = Deferred();
        localStorage.removeItem(type + '-aki-3-userInfo.ic_type');
        localStorage.removeItem(type + '-aki-3-userInfo.ic_number');
        localStorage.removeItem(type + '-aki-3-userInfo.ic_is_long_valid');
        localStorage.removeItem(type + '-aki-3-userInfo.ic_expiry_day');
        localStorage.removeItem(type + '-aki-3-userInfo.gender');
        localStorage.removeItem(type + '-aki-3-userInfo.birthday');
        localStorage.removeItem(type + '-aki-3-userInfo.mobile_phone');
        localStorage.removeItem(type + '-aki-3-userInfo.bank_card_no');
        localStorage.removeItem(type + '-aki-3-userInfo.username');
        deferred.resolve();
        return deferred.promise
    },
    calIcExpiryDay: function (effectiveDayFromBackend) {
        var deferred = Deferred();
        var _effectiveDayFromBackend = effectiveDayFromBackend.split('-')
        var today = new Date();
        var todayInMills = today.getTime();
        var effectiveDay = new Date(_effectiveDayFromBackend[0] + '/' + _effectiveDayFromBackend[1] + '/' + _effectiveDayFromBackend[2]);
        var effectiveDayInMills = effectiveDay.getTime();

        var result = '';
        avalon.log("effectiveDayInMills:" + effectiveDayInMills)
        avalon.log("todayInMills" + todayInMills)
        if (effectiveDayInMills > todayInMills) { //如果后台获取的生效日大于今天的日期
            result = effectiveDayFromBackend;
        } else { //如果今天的大于后台的日期
            var tomorrowMills = todayInMills + 86400000;//以今天的时间向后推迟一天
            var tomorrowDate = new Date(tomorrowMills);
            var todayDateString = tomorrowDate.getFullYear() + '-' + (tomorrowDate.getMonth() + 1) + '-' + (tomorrowDate.getDate());
            result = todayDateString;
        }
        deferred.resolve(result);
        return deferred.promise
    }
};
module.exports = util;