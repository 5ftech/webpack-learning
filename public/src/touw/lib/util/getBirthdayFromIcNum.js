/**
 * Created by brave on 17/4/26.
 */
function trim(s) {
    return s.replace(/^\s+|\s+$/g, "");
};


//验证身份证号并获取出生日期
var getBirthdatByIdNo = function (iIdNo) {
    var tmpStr = "";
    var idDate = "";
    var tmpInt = 0;
    var strReturn = "";

    iIdNo = trim(iIdNo);
    if ((iIdNo.length != 15) && (iIdNo.length != 18)) {
        strReturn = "输入的身份证号位数错误";
        return strReturn;
    }

    if (iIdNo.length == 15) {
        tmpStr = iIdNo.substring(6, 12);
        tmpStr = "19" + tmpStr;
        tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)

        return tmpStr;
    }
    else {
        tmpStr = iIdNo.substring(6, 14);
        tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)

        return tmpStr;
    }
}

module.exports = getBirthdatByIdNo;