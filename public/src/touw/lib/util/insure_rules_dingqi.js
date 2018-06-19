/**
 * Created by brave on 17/4/13.
 */

var ages = require('./ages').ages;
var agesAsync = require('./ages').agesAsync;

/**
 *
 * @param relationship
 * @param birthday
 * @param insured_amount
 * @param callback 返回检查结果( 结果代号，是否需要上传体检报告 )
 * 结果代号1
 * 结果代号2
 * 结果代号3
 * 结果代号4
 * 结果代号5
 */
var checkInsureRule = function (type, relationship, birthday, insured_amount,orderInsured_amount, callback) {
    agesAsync(birthday, type)
        .then(function (age) {
            avalon.log('LOGIC:checkInsureRule:正在检查是否需要上传...' + '，关系：' + relationship + '，生日：' + birthday + '，年龄：' + age);
            if (relationship == "00") {
                staffRule(age, insured_amount, callback);
            } else {
                familyRule(age, insured_amount, callback)
            }
        })
        .otherwise(function (msg) {
            avalon.log(msg)
        });

};

//员工核保规则
function staffRule(age, insured_amount, callback) {  //IGI-宏达-鼎辉 ,
    avalon.log("LOGIC:checkInsureRule:staffRule()", insured_amount)
    if (age > 60) {  //60周岁以上;  这里不符合那个投保年龄
        // vm.needUpload = 4;
        callback(4, false, '');
    } else if (age > 17 && age < 41) { //18-40周岁;


        if (insured_amount > 1500000) {//这里是投保金额过大，弹出弹窗提示用户投保金额过大，使其不能投保，直接callback回相对应的提示
            // vm.needUpload = 5;
            // return false;
            callback(5, false, '');
        } else {
            if (insured_amount <= 700000) { //这里是投保金额小于700001；是不用上传体检报告的，，
                // vm.needUpload = 0;
                callback(0, false, '')
            } else {//这里是投保金额是大于750001的，是需要提示上传体检报告的，，
                // vm.needUpload = 1;
                // vm.originUploadBodyCheck = 0;
                callback(1, true, '您所有订单的累计投保保额已达到体检标准，需要提交体检报告。调低保额至70万以内，则不用提交体检报告。')

            }
        }
    } else if (age > 40 && age < 46) { //41-45周岁;
        if (insured_amount > 1500000) { //这里是投保金额过大，弹出弹窗提示用户投保金额过大，使其不能投保，直接callback回相对应的提示
            // vm.needUpload = 5;
            // return false;
            callback(5, false, '');
        } else {
            if (insured_amount < 600001) {//这里是投保金额小于600001；是不用上传体检报告的，，
                // vm.needUpload = 0;
                callback(0, false, '')
            } else {//这里是投保金额是大于750001的，是需要提示上传体检报告的，，
                // vm.needUpload = 1;
                // vm.originUploadBodyCheck = 0;
                callback(1, true, '您所有订单的累计投保保额已达到体检标准，需要提交体检报告。调低保额至60万以内，则不用提交体检报告。')
            }
        }
    } else if (age > 45 && age < 51) { //46-50周岁

        if (insured_amount > 1500000) {//这里是投保金额大于1500000是直接提示不给投保的
            // vm.needUpload = 5;
            // return false;
            callback(5, false, '')

        } else {
            if (insured_amount < 200001) {//这是投保金额小于200000的时候这个是不会出现需要上传体检报告的
                // vm.needUpload = 0;
                callback(0, false, '')
            } else {//反之，这里是要上传体检报告的
                // vm.needUpload = 1;
                // vm.originUploadBodyCheck = 0;
                callback(1, true, '调低累计保额至20万元以内，则不用提交体检报告。');
            }
        }
    } else if (age > 50 && age < 61) { //51-60周岁
        if (insured_amount > 1500000) {
            // vm.needUpload = 5;
            // return false;
            callback(5, false, '');

        } else {
            if (insured_amount < 100001) {//这是投保金额是在100001的时候是不会出现需要上传体检报告的
                // vm.needUpload = 0;
                callback(0, false, '')
            }
            else {//反之这些是要上传体检报告的
                // vm.needUpload = 1;
                // vm.originUploadBodyCheck = 0;
                callback(1, true, '调低保额至10万以内，则不用提交体检报告。')
            }
        }
    }

    else if (age < 18) {
        callback(6, false, '')
    }
}

//家属核保规则
function familyRule(age, insured_amount, callback) { // 鼎辉
    avalon.log("LOGIC:checkInsureRule:familyRule()", insured_amount);
    if (insured_amount > 750000) {
        // vm.needUpload = 5;
        alertModal.open("未成年家属参保额度已超过50万元，请您重新选择")
        callback(5, false, '')
    } else {
        if (age < 18) {  //0-18周岁

            if (insured_amount < 500001) {  //如果投保金额是大于50万的，那么就直接不用上传体检报告
                // if (insured_amount < 200001) {//这里是投保金额小于750001；是不用上传体检报告的，，
                //     callback(0, false, '')
                // } else {//这里是投保金额是大于750001的，是需要提示上传体检报告的，，
                //     callback(1, true, '调低保额至20万元以内，则不用提交体检报告。')
                // }
                callback(0, false, '')
            }
            else {
                alertModal.open("未成年家属参保额度已超过50万元，请您重新选择")
                callback(5, false, '未成年家属参保额度已超过50万元，请您重新选择',false)
                // callback(1, true)
                // callback(0, false)

                return false
            }
        }
        else if (age >= 18 && age < 46) { //18-45周岁
            if (insured_amount <= 400000) { //金额小于40万
                // vm.needUpload = 0;
                callback(0, false, '')
            }
            if (insured_amount > 400000 && insured_amount <= 750000) {
                // vm.needUpload = 3;
                // vm.originUploadBodyCheck = 0;
                callback(3, true, '调低保额至40万元以内，则不用提交体检报告。');


            }

        }
        else if (age > 45 && age < 61) { //46-60周岁
            if (insured_amount < 100001) {
                // vm.needUpload = 0;
                callback(0, false, '')
            }

            if (insured_amount > 100000 && insured_amount < 200001) {
                // vm.needUpload = 2;
                // vm.originUploadBodyCheck = 0;
                callback(2, true, '调低保额至10万元以内，则不用提交体检报告。')//这个2是代表着prd里面的I
            }
            if (insured_amount > 200000 && insured_amount <= 400000) {
                // vm.needUpload = 3;
                // vm.originUploadBodyCheck = 0;
                callback(3, true, '调低保额至10万元以内，则不用提交体检报告。')//这个3是代表着prd里面的II

            }
            if (insured_amount > 400000 && insured_amount <= 750000) {
                // vm.needUpload = 3;
                // vm.originUploadBodyCheck = 0;
                callback(3, true, '调低保额至10万元以内，则不用提交体检报告。');

            }
        }
        else {
            if (insured_amount > 750000) {
                // vm.needUpload = 5;
                // return false;
                callback(5, false, '')
            }
        }
    }
}


module.exports = checkInsureRule;