/**
 * Created by brave on 17/4/13.
 */
/**
 *
 * @param a upload_body_check 是否需要上传体检报告
 * @param b upload_idCard 是否需要上传身份证
 * @param c upload_confirm 是否需要上传投保确认书
 * @param callback uploadStatus
 * 1 全部都要上传
 * 2 需要上传 身份证 投保确认书
 * 3 需要上传 上传体检报告  投保确认书
 * 4 需要上传 投保确认书
 * 5 需要上传 上传体检报告  身份证
 * 6 需要上传 上传体检报告
 * 7 全部都不需要上传
 * 8 需要上传 身份证
 */
var checkUploadRule = function (a, b, c) {
    var deferred = Deferred();
    avalon.log("LOGIC:checkUploadRule:" + a + "," + b + "," + c);

    if (a == 0 && b == 0 && c == 0) {
        avalon.log(1);
        deferred.resolve(1);
    }
    else if ((a == 1 || a == -1) && b == 0 && c == 0) {
        avalon.log(2);
        deferred.resolve(2);
    }
    else if (a == 0 && (b == 1 || b == -1 || b == '-1') && c == 0) {
        avalon.log(3);
        deferred.resolve(3);
    }
    else if ((a == 1 || a == -1 || a == '-1') && (b == 1 || b == -1 || b == '-1') && c == 0) {
        avalon.log(4);
        deferred.resolve(4);
    }
    else if (a == 0 && b == 0 && (c == 1 || c == -1 || c == '-1')) {
        avalon.log(5);
        deferred.resolve(5);
    }
    else if (a == 0 && (b == 1 || b == -1) && (c == 1 || c == -1 || c == '-1')) {
        avalon.log(6);
        deferred.resolve(6);
    }
    else if ((a == 1 || a == -1) && (b == 1 || b == -1 || b == '-1') && (c == 1 || c == -1 || c == '-1')) {
        avalon.log(7);
        deferred.resolve(7);
    }
    else if ((a == 1 || a == -1 || a == '-1') && b == 0 && (c == 1 || c == -1 || c == '-1')) {
        avalon.log(8);
        deferred.resolve(8);
    }
    return deferred.promise;
};

module.exports = checkUploadRule;