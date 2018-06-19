/**
 * Created by zhihaoyao on 2017/3/28.
 */

var object = {
    //获取url
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)return unescape(r[2]);
        return null;
    }
};

module.exports = object;