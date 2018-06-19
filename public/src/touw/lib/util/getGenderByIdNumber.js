/**
 * Created by brave on 17/4/17.
 */
var getSexByIdNum = function (psidno) {
    var sexno, sex;
    if (psidno.length == 18) {
        sexno = psidno.substring(16, 17)
    } else if (psidno.length == 15) {
        sexno = psidno.substring(14, 15)
    } else {
        // alert("错误的身份证号码，请核对！")
        return false
    }
    var tempid = sexno % 2;

    if (tempid == 0) {
        sex = 1; //返回女
    } else {
        sex = 0; //返回男
    }
    return sex
};

module.exports = getSexByIdNum;