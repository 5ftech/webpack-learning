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
        if (orderInsured_amount > 1000000) {//这里是投保金额过大，弹出弹窗提示用户投保金额过大，使其不能投保，直接callback回相对应的提示
            alertModal.open('员工本人参保额度已超过100万元，请您重新选择');
            callback(5, false, '', false);
        } else {
            if (insured_amount > 1000000) {
                alertModal.open('员工本人累计参保额度已超过100万元，请您重新选择');
                callback(5, false, '', true);
            } else {
                if (cumulativeAmount >= 650000) {
                    callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：65万元及以下。', true)
                } else if (cumulativeAmount == 0 && orderInsured_amount > 650000) {
                    callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (650000 - cumulativeAmount) / 10000 + '万元及以下。', false)
                }
                else {
                    if (insured_amount > 650000) {
                        callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (650000 - cumulativeAmount) / 10000 + '万元及以下。', true)
                    } else {
                        if (insured_amount <= 650000) {
                            callback(0, false, '')
                        } else {
                            callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：65万元及以下。', false);
                        }
                    }
                }


            }
        }
    }
    // else if (age >= 41 && age <= 45) { //41-45周岁
    //
    //     if (orderInsured_amount > 1000000) {//这里是投保金额过大，弹出弹窗提示用户投保金额过大，使其不能投保，直接callback回相对应的提示
    //         alertModal.open('员工本人参保额度已超过100万元，请您重新选择');
    //         callback(5, false, '', false);
    //     } else {
    //         if (insured_amount > 1100000) {
    //             alertModal.open('员工本人累计参保额度已超过100万元，请您重新选择');
    //             callback(5, false, '', true);
    //         } else {
    //             if (cumulativeAmount >= 600000) {
    //                 callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：60万元及以下。', true)
    //             }
    //             else if (cumulativeAmount == 0 && orderInsured_amount > 600000) {
    //                 callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (600000 - cumulativeAmount) / 10000 + '万元及以下。', false)
    //             }
    //             else {
    //                 if (insured_amount > 600000) {
    //                     callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (600000 - cumulativeAmount) / 10000 + '万元及以下。', true)
    //                 } else {
    //                     if (insured_amount <= 600000) {
    //                         callback(0, false, '')
    //                     } else {
    //                         callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：60万元及以下。', false);
    //                     }
    //                 }
    //             }
    //
    //
    //         }
    //     }
    //
    // }
    else if (age >= 46 && age <= 50) { //46-50周岁

        if (orderInsured_amount > 1000000) {//这里是投保金额过大，弹出弹窗提示用户投保金额过大，使其不能投保，直接callback回相对应的提示
            alertModal.open('员工本人参保额度已超过100万元，请您重新选择');
            callback(5, false, '', false);
        } else {
            if (insured_amount > 1000000) {
                alertModal.open('员工本人累计参保额度已超过100万元，请您重新选择');
                callback(5, false, '', true);
            } else {
                if (cumulativeAmount >= 200000) {
                    callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：20万元及以下。', true)
                }
                else if (cumulativeAmount == 0 && orderInsured_amount > 200000) {
                    callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (200000 - cumulativeAmount) / 10000 + '万元及以下。', false)
                }
                else {
                    if (insured_amount > 200000) {
                        callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (200000 - cumulativeAmount) / 10000 + '万元及以下。', true)
                    } else {
                        if (insured_amount <= 200000) {
                            callback(0, false, '')
                        } else {
                            callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：20万元及以下。', false);
                        }
                    }
                }
            }
        }
    }
    else if (age >= 51 && age <= 55) { //50-60周岁

        if (orderInsured_amount > 1500000) {//这里是投保金额过大，弹出弹窗提示用户投保金额过大，使其不能投保，直接callback回相对应的提示
            alertModal.open('员工本人参保额度已超过100万元，请您重新选择');
            callback(5, false, '', false);
        } else {
            if (insured_amount > 1500000) {
                alertModal.open('员工本人累计参保额度已超过100万元，请您重新选择');
                callback(5, false, '', true);
            } else {
                if (cumulativeAmount >= 100000) {
                    callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：10万元及以下。', true)
                }
                else if (cumulativeAmount == 0 && orderInsured_amount > 100000) {
                    callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (100000 - cumulativeAmount) / 10000 + '万元及以下。', false)
                }
                else {
                    if (insured_amount > 100000) {
                        callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (100000 - cumulativeAmount) / 10000 + '万元及以下。', true)
                    } else {
                        if (insured_amount <= 100000) {
                            callback(0, false, '')
                        } else {
                            callback(1, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：10万元及以下。', false);
                        }
                    }
                }
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

    if (cumulativeAmount >= 500000 && insured_amount > 500000) {
        window.alertModal.open("配偶累计参保额度已超过50万元，请您重新选择");
        callback(5, false, '', true)
    } else {
        if (insured_amount > 500000) {
            window.alertModal.open("配偶累计参保额度已超过50万元，请您重新选择");
            callback(5, false, '', false)
        } else {
            if (orderInsured_amount > 500000) {
                window.alertModal.open("配偶参保额度已超过50万元，请您重新选择");
                callback(5, false, '', false)
            }
            else {
                if (age >= 18 && age <= 45) {
                    if (cumulativeAmount >= 400000) {
                        callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：40万元及以下。', true)//这个3是代表着prd里面的II
                    } else {
                        if (insured_amount > 400000 && cumulativeAmount != 0) {
                            callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (400000 - cumulativeAmount) / 10000 + '万元及以下。', true)//这个3是代表着prd里面的II
                        }
                        else if (insured_amount > 400000 && cumulativeAmount == 0) {
                            callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：' + (400000 - cumulativeAmount) / 10000 + '万元及以下。', false)//这个3是代表着prd里面的II
                        }
                        else {
                            if (orderInsured_amount > 400000 && orderInsured_amount <= 500000) {
                                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：40万元及以下。', false)//这个3是代表着prd里面的II
                            } else {
                                callback(0, false, '')
                            }
                        }
                    }
                }
                else if (age >= 46 && age <= 55) {  //年龄 46 - 55
                    avalon.log(cumulativeAmount, insured_amount, orderInsured_amount) // (本订单前累计保额，总保额，本单保额)
                    if (cumulativeAmount > 100000 && cumulativeAmount <= 200000) {  //本订单前累计额度
                        if (insured_amount > 200000) {
                            callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：10万元及以下。', true)//这个2是代表着prd里面的I
                        } else {
                            callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：10万元及以下。', true)//这个2是代表着prd里面的I
                        }
                    }
                    else if (cumulativeAmount >= 200000 && cumulativeAmount <= 400000) {
                        callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低累计保额至：10万元及以下。', true)//这个2是代表着prd里面的II
                    }
                    else {
                        if (insured_amount > 100000 && cumulativeAmount != 0) { //本订单加上累计额度

                            if (cumulativeAmount < 100000 && (insured_amount > 100000 && insured_amount <= 200000)) {
                                callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：' + (100000 - cumulativeAmount) / 10000 + '万元及以下。', true)//这个3是代表着prd里面的II
                            }

                            else if (cumulativeAmount < 100000 && (insured_amount > 200000 && insured_amount <= 500000)) {
                                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：' + (100000 - cumulativeAmount) / 10000 + '万元及以下。', true)//这个3是代表着prd里面的II
                            }

                            else if (cumulativeAmount >= 100000 && insured_amount <= 200000) {
                                callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：' + (200000 - cumulativeAmount) / 10000 + '万元及以下。', true)//这个3是代表着prd里面的II
                            }

                            else if (insured_amount >= 100000 && insured_amount <= 200000) {
                                callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：10万元及以下。', true)//这个3是代表着prd里面的II
                            }
                            else if (insured_amount >= 200000 && insured_amount <= 500000) {
                                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：10万元及以下。', true)//这个3是代表着prd里面的II

                            }
                        }
                        else {
                            if (orderInsured_amount <= 100000) {
                                callback(0, false, '')
                            }
                            else if (orderInsured_amount > 100000 && orderInsured_amount <= 200000) {
                                callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：10万元及以下。', false)//这个3是代表着prd里面的II
                            }
                            else if (orderInsured_amount >= 200000 && orderInsured_amount <= 500000) {
                                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低保额至：10万元及以下。', false)//这个3是代表着prd里面的II

                            }
                        }
                    }
                }
                else if( age > 55){
                    window.alertModal.open("员工家属年龄不能大于55周岁");
                    callback(5, false, '', false)
                }
            }
        }


    }
}

//家属核保规则
function familyRule(age, insured_amount, orderInsured_amount, callback) { //insured_amount:累计订单 ， orderInsured_amount：本次订单
    avalon.log("LOGIC:checkInsureRule:familyRule()", age, insured_amount);

    if (orderInsured_amount > 500000) {
        window.alertModal.open("员工家属参保额度已超过50万元，请您重新选择");
        callback(5, false, '', false)
    } else {
        if (age >= 8 && age < 18) {  //0-18周岁
            if (orderInsured_amount <= 330000) {  //如果投保金额是大于33万的，那么就直接不用上传体检报告
                callback(0, false, '')
            }
            else {
                alertModal.open("未成年人投保不能超过33万")
                callback(5, false, '', false)
                return false
            }
        }
        else if (age >= 18 && age <= 45) { //18-45周岁
            if (orderInsured_amount <= 400000) {
                callback(0, false, '')
            }
            if (orderInsured_amount > 400000 && orderInsured_amount <= 500000) {
                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：40万元及以下。', false);
            }
        }
        else if (age >= 46 && age <= 55) { //46-55周岁
            if (orderInsured_amount <= 100000) {
                // vm.needUpload = 0;
                callback(0, false, '')
            }
            if (orderInsured_amount > 100000 && orderInsured_amount <= 200000) {
                callback(2, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false)//这个2是代表着prd里面的I
            }
            if (orderInsured_amount > 200000 && orderInsured_amount <= 500000) {
                callback(3, true, '如体检报告项目不符合以上项目要求（如缺项、漏项），请降低本单保额至：10万元及以下。', false)//这个3是代表着prd里面的II
            }

        }
        else if (age > 55) {
            alertModal.open("员工家属投保年龄不能大于55周岁");
            callback(5, false, '', false)

        }
    }
}


module.exports = checkInsureRule;