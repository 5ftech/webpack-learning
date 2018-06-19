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
var checkInsureRule = function (type, relationship, birthday, insured_amount, orderInsured_amount, callback) {
    avalon.log("checkInsureRule:", type, relationship, birthday, insured_amount, orderInsured_amount);

    agesAsync(birthday, type)
        .then(function (age) {
            if (relationship == "00") { //本人
                staffRule(age, insured_amount, orderInsured_amount, callback);
            } else if (relationship == "01") { //配偶
                spouseRule(age, insured_amount, orderInsured_amount, callback);
            } else { //家属
                familyRule(age, insured_amount, orderInsured_amount, callback)
            }
        })
        .otherwise(function (msg) {

        });
};

//员工核保规则
function staffRule(age, insured_amount, orderInsured_amount, callback) { //insured_amount:累计订单 ， orderInsured_amount：本次订单
    orderInsured_amount = parseInt(orderInsured_amount);
    var cumulativeAmount = insured_amount - orderInsured_amount; //投本单前的累计
    avalon.log("LOGIC:checkInsureRule:staffRule()", age, insured_amount, orderInsured_amount, cumulativeAmount);

    if (age > 55) {  //55周岁以上;  这里不符合那个投保年龄
        // vm.needUpload = 4;
        alertModal.open('投保人年龄不能大于55周岁');
        callback(5, false, '', false);
    }
    else if (age >= 18 && age <= 45) { //18-45周岁;

        if (orderInsured_amount > 1000000) {
            alertModal.open('投保人保额不能大于100万');
            callback(5, false, '', false);
        } else {
            if (orderInsured_amount > 650000) {
                callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：65万元及以下。', false)

            } else {
                callback(0, false, '', false);
            }
        }

    }
    else if (age >= 46 && age <= 50) { //46-50周岁
        if (orderInsured_amount > 1000000) {
            alertModal.open('投保人保额不能大于100万');
            callback(5, false, '', false);
        } else {
            if (orderInsured_amount > 200000) {
                callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：20万元及以下。', false)

            } else {
                callback(0, false, '', false);
            }
        }

    }
    else if (age >= 51 && age <= 55) { //50-60周岁
        if (orderInsured_amount > 1000000) {
            alertModal.open('投保人保额不能大于100万');
            callback(5, false, '', false);
        } else {
            if (orderInsured_amount > 100000) {
                callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：10万元及以下。', false)

            } else {
                callback(0, false, '', false);
            }
        }
    }
    else if (age < 18) {
        callback(6, false, '')
    }
}

//配偶核保规则
function spouseRule(age, insured_amount, orderInsured_amount, callback) {
    orderInsured_amount = parseInt(orderInsured_amount);
    avalon.log("spouseRule:", age, orderInsured_amount, insured_amount, orderInsured_amount);
    var cumulativeAmount = insured_amount - orderInsured_amount; //投本单前的累计

    if (orderInsured_amount > 500000) {
        avalon.log("age:",age)
        if (age < 18) {
            window.alertModal.open("员工家属未满18周岁投保额度不能超过33万！")
            callback(5, false, '', false);
        } else {
            window.alertModal.open("成年家属投保保额不能大于50万")
            callback(5, false, '', false);
        }
    } else {
        if(age < 18){
            if(orderInsured_amount > 330000){
                window.alertModal.open("员工家属未满18周岁投保额度不能超过33万！")
                callback(5, false, '', false);
            }
        }
        if (age >= 18 && age <= 45) {
            if (orderInsured_amount > 400000 && orderInsured_amount <= 500000) {
                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：40万元及以下。', false);
            } else {
                callback(0, false, '', false);
            }
        }
        else if (age >= 46 && age <= 50) {
            if (orderInsured_amount > 100000 && orderInsured_amount <= 500000) {
                if (orderInsured_amount > 100000 && orderInsured_amount <= 200000) {
                    callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                } else {
                    callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                }
            } else {
                callback(0, false, '', false);
            }
        }
        else if (age >= 51 && age <= 55) {
            if (orderInsured_amount > 100000 && orderInsured_amount <= 500000) {
                if (orderInsured_amount > 100000 && orderInsured_amount <= 200000) {
                    callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                } else {
                    callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                }
            } else {
                callback(0, false, '', false);
            }
        }
    }

}

//家属核保规则
function familyRule(age, insured_amount, orderInsured_amount, callback) { //insured_amount:累计订单 ， orderInsured_amount：本次订单
    avalon.log("LOGIC:checkInsureRule:familyRule()", age, insured_amount);

    if (orderInsured_amount > 500000) {
        if (age < 18) {
            window.alertModal.open("员工家属未满18周岁投保额度不能超过33万！")
            callback(5, false, '', false);
        } else {
            window.alertModal.open("成年家属投保保额不能大于50万")
            callback(5, false, '', false);
        }
    } else {
        if (age < 18) {
            if (orderInsured_amount > 330000) {
                alertModal.open('员工家属未满18周岁投保额度不能超过33万！');
                callback(5, false, '', false);
            } else {
                callback(0, false, '', false);
            }
        }
        else if (age >= 18 && age <= 45) {
            if (orderInsured_amount > 400000 && orderInsured_amount <= 500000) {
                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：40万元及以下。', false);
            } else {
                callback(0, false, '', false);
            }
        }
        else if (age >= 46 && age <= 50) {
            if (orderInsured_amount > 100000 && orderInsured_amount <= 500000) {
                if (orderInsured_amount > 100000 && orderInsured_amount <= 200000) {
                    callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                } else {
                    callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                }
            } else {
                callback(0, false, '', false);
            }
        }
        else if (age >= 51 && age <= 55) {
            if (orderInsured_amount > 100000 && orderInsured_amount <= 500000) {
                if (orderInsured_amount > 100000 && orderInsured_amount <= 200000) {
                    callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                } else {
                    callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false);
                }
            } else {
                callback(0, false, '', false);
            }
        }
    }

}


module.exports = checkInsureRule;