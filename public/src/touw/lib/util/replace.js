/**
 * Created by zhihaoyao on 2017/4/24.
 */

var replace = {
    //去除空格
    replaceSpace: function (s) {
        return s.replace(/(^\s*)|(\s*$)/g, "");
        //
        // var pattern = new RegExp("/\s/g");
        // var rs = "";
        // for (var i = 0; i < s.length; i++) {
        //     rs = rs + s.substr(i, 1).replace(pattern, '');
        // }
        // return rs;
    },
    replaceNotPhoneNumber: function (s) {
        //去除非电话号码的字符
        function phoneScript(s) {
            var pattern = new RegExp("[·.＋+@＃¥％＊`~!#$^&*()=|{}':;',\\[\\]%<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？_a-zA-Z]");
            var rs = "";
            for (var i = 0; i < s.length; i++) {
                rs = rs + s.substr(i, 1).replace(pattern, '');
            }
            return rs;
        }
    },
    replaceChineseChar: function (s) {
        var pattern = new RegExp("[\u4e00-\u9fa5]");
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
        return rs;
    },
    //去除非数字及取整
    replaceOtherExceptNumber: function (value) {
        if (value.toString()) {
            var newstr;
            var regexp = /[^0123456789]*/g;
            newstr = value.toString().replace(regexp, "");
            if(parseInt(newstr) == '0'){
                return parseInt(newstr);
            }else if (parseInt(newstr)) {
                return parseInt(newstr);
            } else {
                return '';
            }
        } else {
            return value;
        }
    },

    //只能输入正整数
    positiveInteger: function (value) {
        if (value.toString()) {
            var newstr;
            var regexp = /["^\d]/g;
            newstr = value.toString().replace(regexp, "");
            return newstr;
        } else {
            return value;
        }
    },
    //去除非数字
    onlyNumber: function (value) {
        if (value.toString()) {
            var newstr;
            var regexp = /[^\d]]*/g;
            newstr = value.toString().replace(regexp, "");
            return newstr;
        } else {
            return value;
        }
    },
    //去除非数字与英文字母
    replaceOtherExceptNumberAndEn: function (s) {
        var pattern = new RegExp("[＋+@＃¥％＊`~!#$^&*()=|{}':;',\\[\\]%<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？_]");
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
        return rs;
    },
    //去除非中文名字符
    replaceOtherExceptCnName: function (s) {
        var pattern = new RegExp("[_____＋+@＃¥％＊`~!#$^&*()=|{}':;',\\[\\]%<>/?_-+~！#￥……&*（）——|{}【】‘；：”“'。，、？_a-zA-Z0-9]");
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
        return rs;
    },
    replaceOtherExceptCnName2: function (s) {
        var pattern = new RegExp("^[\u4e00-\u9fa5]{1,}$");
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            if (s.substr(i, 1).replace(pattern) == undefined || s.substr(i, 1).replace(pattern) == "undefined" || s.substr(i, 1).replace(pattern) == null) {
                rs = rs + s.substr(i, 1);
            }
        }
        return rs;
    },
    //去除中文字符
    replaceChinese: function (s) {
        var pattern = new RegExp("^[\u4e00-\u9fa5]{1,}$");
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
        return rs;
    }

};

module.exports = replace;