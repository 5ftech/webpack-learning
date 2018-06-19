var cookie = require('./cookie');
var util = {
    deleteProgramCookies: function (type) {
        var deferred = Deferred();
        localStorage.removeItem(type + '-aki-2-birthday');
        localStorage.removeItem(type + '-aki-2-gender');
        localStorage.removeItem(type + '-aki-2-pay_year');
        localStorage.removeItem(type + '-aki-2-insured_amount');
        localStorage.removeItem(type + '-aki-2-relationship');
        localStorage.removeItem(type + '-aki-2-insurer_name');


        cookie.get
        deferred.resolve();
        return deferred.promise
    },
    getPayYearPlansforaki: function (age) {
        var deferred = Deferred();
        var that = this;
        var payYears;
        if (age > 0 && age <= 45) {
            payYears = [
                {value: '-1', name: '请选择'},
                {value: '0', name: '趸交'},
                {value: '3', name: '3年交'},
                {value: '5', name: '5年交'},
                {value: '10', name: '10年交'},
                {value: '15', name: '15年交'},
                {value: '20', name: '20年交'}
            ];
        }
        else if (age >= 46 && age <= 50) {
            payYears = [
                {value: '-1', name: '请选择'},
                {value: '0', name: '趸交'},
                {value: '3', name: '3年交'},
                {value: '5', name: '5年交'},
                {value: '10', name: '10年交'},
                {value: '15', name: '15年交'},
            ];
        }
        else if (age >= 51 && age <= 55) {
            payYears = [
                {value: '-1', name: '请选择'},
                {value: '0', name: '趸交'},
                {value: '3', name: '3年交'},
                {value: '5', name: '5年交'},
                {value: '10', name: '10年交'},
            ];
        }
        else {
            payYears = [
                {value: '-1', name: '请选择'},
                {value: '0', name: '趸交'},
                {value: '3', name: '3年交'},
                {value: '5', name: '5年交'},
            ];
        }
        deferred.resolve(payYears);
        return deferred.promise;
    },
    checkSelectionInPlans: function (pay_year, payYearPlans) {
        var deferred = Deferred();
        var that = this;
        var inPlan = false;
        for (var i = 0; i < payYearPlans.length; i++) {
            var item = payYearPlans[i]
            if (item == pay_year) {
                inPlan = true;
            }
        }
        deferred.resolve(inPlan);
        return deferred.promise;
    },

    //region 定期根据年龄和交费期间获取保险期间
    getCorrectInsurancePeriodYears: function (age, pay_year) {
        var deferred = Deferred();
        var that = this;
        var InsurancePeriodYears;
        avalon.log("getCorrectInsurancePeriodYears", age, pay_year);
        // if (age < 8) {
        //     if (pay_year == 3 || pay_year == 5 || pay_year == 10) {
        //         InsurancePeriodYears = [20, 30, 60, 70, 80];
        //     } else {
        //         InsurancePeriodYears = [30, 60, 70, 80];
        //     }
        // }
        InsurancePeriodYears = [75, 150];
        deferred.resolve(InsurancePeriodYears);
        return deferred.promise;
    },
    //endregion
    calDate: function (effectiveDate, relationship, callback) {
        var dateAllowedMax;
        var dateAllowedMin;
        var yearToCompare = parseInt(effectiveDate.split('-')[0])
        var monthToCompare = parseInt(effectiveDate.split('-')[1])
        var dateToCompare = parseInt(effectiveDate.split('-')[2])
        var oneDay = 86400000; //一天的毫秒数
        var minFamilyDay = oneDay * 28;
        var SixtyDays = oneDay * 60;
        var effectiveDateMS = new Date(effectiveDate).getTime();
        // var minimumDate = effectiveDateMS - SixtyDays;  //生效日期 - 60天
        var minimumDate = effectiveDateMS - minFamilyDay;  //生效日期 - 28天

        if (relationship == "00") {
            dateAllowedMax = yearToCompare - 18 + "-" + monthToCompare + '-' + (dateToCompare + 0);
            dateAllowedMin = yearToCompare - 61 + "-" + (monthToCompare) + '-' + (dateToCompare + 1);
            callback(dateAllowedMin, dateAllowedMax)
        } else {

            // yearToCompare = parseInt(new Date(minimumDate).getFullYear())
            // monthToCompare = parseInt(new Date(minimumDate).getMonth() + 1)
            // dateToCompare = parseInt(new Date(minimumDate).getDate())
            // dateAllowedMax = yearToCompare - 8 + "-" + (monthToCompare) + '-' + (dateToCompare + 0);

            var a = new Date(minimumDate);
            dateAllowedMax = a.getFullYear() + "-"+ (a.getMonth()+1) + "-" + a.getDate();
            // alert(dateAllowedMax);
            dateAllowedMin = yearToCompare - 61 + "-" + monthToCompare + '-' + (dateToCompare + 1);
            callback(dateAllowedMin, dateAllowedMax)
        }
        avalon.log('UTIL:calDate:计算出minDate:' + dateAllowedMin);
        avalon.log('UTIL:calDate:计算出maxDate:' + dateAllowedMax);
    },


    dingqicalDate: function (effectiveDate, relationship, callback) {

        var effectiveDay;
        effectiveDay = effectiveDate.replace('-', '/');
        effectiveDay = effectiveDay.replace('-', '/');
        var effectiveDayTimeInMills = new Date(effectiveDay).getTime();

        var minYear = effectiveDay.split('/')[0] - 8;
        var minDateForWidget = minYear + '-' + effectiveDay.split('/')[1] + '-' + effectiveDay.split('/')[2];
        minDateForWidget = minDateForWidget.replace('-', '/');
        minDateForWidget = minDateForWidget.replace('-', '/');
        var minEffectiveDayTimeInMills = new Date(minDateForWidget).getTime();
        var minDelta = 86400000;
        var DateForWidget = new Date();
        DateForWidget.setTime(minEffectiveDayTimeInMills + minDelta);
        minDateForWidget = DateForWidget.getFullYear() + '-' + (DateForWidget.getMonth() + 1) + '-' + DateForWidget.getDate();


        var _60day = new Date();
        var delta = 86400000 * 60;
        _60day.setTime(effectiveDayTimeInMills - delta);
        var _60DayForWidget = _60day.getFullYear() + '-' + (_60day.getMonth() + 1) + '-' + _60day.getDate();

        callback(minDateForWidget, _60DayForWidget)

    },
    getGenderByRelationship: function (userInfoGender, relationship, callback) {
        avalon.log('UTIL:getGenderByRelationship:' + userInfoGender + ":" + relationship);
        var gender = 0;
        if (userInfoGender) {
            if (relationship == '01') {
                if (userInfoGender == '1') {
                    gender = 0;
                } else {
                    gender = 1;
                }
            } else if (relationship == '00') {
                gender = userInfoGender;
            } else {
                gender = userInfoGender;
            }
        } else {
            gender = 0;
        }
        callback(gender)
        avalon.log('UTIL:getGenderByRelationship' + '根据关系计算性别：' + gender);
    }
};
module.exports = util;