/**
 * Created by brave on 17/2/7.
 */
/**
 * Created by brave on 16/12/28.
 */
//null filter


var type = navigator.appName;
var lang;
var genders;

if (type == "Netscape") {
    lang = navigator.language;
}
else {
    lang = navigator.userLanguage;
}
lang = lang.substr(0, 2);
if (lang == "zh") {
    genders = require('./dic/genders').zh;
}
else {
    genders = require('./dic/genders').en;
}

var careers = require('./dic/careers');
var userInfoCareers = require('./dic/userInfoCareers');
var maritalStatus = require('./dic/maritalStatus');
var orderStatus = require('./dic/orderStatus');
var relationships = require('./dic/relationships');
var icTypes = require('./dic/icTypes');
var uwResults = require('./dic/uwResults');
var nationLists = require('./dic/nationalities');
var provinces = require('./dic/provinces');
var cities = require('./dic/cities');
var districts = require('./dic/districts');
var surveys = require('./dic/surveys');

avalon.filters.onlyNumber = function (str) {
    avalon.log("onlyNumber", str)
    str = str.toString();
    var regexp = /[^\d]]*/g;
    var newstr;
    newstr = str.replace(regexp, "");
    return newstr
};
avalon.filters.payYearFilter = function (str) {
    if (str == '0' || str == 0) {
        return '趸交';
    } else {
        return str + '年'
    }
};
avalon.filters.onlyChineseAndEnglish = function (str) {
    avalon.log("onlyChineseAndEnglish", str)
    // var regexp = /^[\u4e00-\u9fa5][a-zA-Z][0-9]+$/;
    var regexp = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
    var newstr;
    newstr = str.replace(regexp, "");
    avalon.log("onlyChineseAndEnglish:newstr", newstr)

    return newstr
};

avalon.filters.nullFilter = function (str) {
    if (str == null || str == undefined) {
        return '';
    } else {
        return str
    }
};
avalon.filters.setNullFilter = function (str) {
    if (str == null || str == undefined) {
        return '--';
    } else {
        return str
    }
};
avalon.filters.insurance_period = function (str) {
    if (str == null || str == undefined) {
        return '';
    } else {
        if (str == 20 || str == 30) {
            return str + '年'
        } else {
            return '至被保险人' + str + "周岁后的首个保单周年日"
        }
    }
};

//居民类型
avalon.filters.residentsTypeFilter = function (str) {
    // avalon.log('居民类型:' + str)
    if (str == '1') {
        return '城镇居民'
    } else if (str == '2') {
        return '农村居民'
    }
};
//订单状态过滤器
avalon.filters.orderStatusFilter = function (str) {
    // avalon.log('订单状态代码:' + str)
    if (str == '' && str != '0') {
        return '全部'
    } else {
        var items = orderStatus;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
};

//核保结果过滤器
avalon.filters.uwResultFilter = function (str) {
    // avalon.log('核保状态代码:' + str)
    if (str == '' && str != '0') {
        return '全部'
    }
    else {
        var items = uwResults;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
};

//调研报告过滤器
avalon.filters.surveyFilter = function (str) {
    if (str == '' && str != '0') {
        return '全部'
    }
    else {
        var items = surveys;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
};

//关系
avalon.filters.relationShipFilter = function (str) {
    // avalon.log('关系代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var items = relationships;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
};

//证件
avalon.filters.icTypeFilter = function (str) {
    // avalon.log('证件代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var items = icTypes;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
}

//性别
avalon.filters.genderFilter = function (str) {
    // avalon.log('性别代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var items = genders;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }


};

//是否长期有效
avalon.filters.icIsLongValidFilter = function (str) {
    // avalon.log('证件是否长期有效代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else if (str == '1') {
        return '是'
    }
    else if (str == '0') {
        return '否'
    }
};

//婚姻
avalon.filters.maritalFilter = function (str) {
    // avalon.log('婚姻状态代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var items = maritalStatus;// 引用dic/maritalStatus.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }

};

//职业
avalon.filters.careerFilter = function (str) {
    // avalon.log('职业代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var items = careers;// 引用dic/careers.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
};
//工作单位性质
avalon.filters.userInfoCareersFilter = function (str) {
    // avalon.log('职业代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var items = userInfoCareers;// 引用dic/careers.js
        for (var i = 0; i < items.length; i++) {
            if (str == items[i].key) {
                return items[i].value
            }
        }
    }
};
//证件号码
avalon.filters.ic_numberFilter = function (str) {
    // avalon.log('职业代码:' + str)
    return str.toLocaleUpperCase();
};

//国籍
avalon.filters.countryFilter = function (str) {
    // avalon.log('国籍代码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        for (var i = 0; i < nationLists.length; i++) {
            var item = nationLists[i];
            if (str == item['id']) {
                // avalon.log(item['cn'])
                return item['cn'];
            }
        }
    }
}

//省var provinces =
avalon.filters.provinceFilter = function (str) {
    if (str == '' && str != '0') {
        return ''
    } else {
        var result = '';
        for (var i = 0; i < provinces.length; i++) {
            var item = provinces[i];
            if (str == item['id']) {
                result = item['name']
            }
        }
        return result;
    }
};

//市
avalon.filters.cityFilter = function (str) {
    if (str == '' && str != '0') {
        return ''
    } else {
        var result = '';
        // avalon.log(cities.length);
        for (var i = 0; i < cities.length; i++) {
            var item = cities[i];
            if (str == item['id']) {
                result = item['name'];
            }
        }
        return result;
    }
};

//区
avalon.filters.districtFilter = function (str) {
    if (str == '' && str != '0') {
        return ''
    } else {
        var result = '';
        for (var i = 0; i < districts.length; i++) {
            var item = districts[i];
            if (str == item['id']) {
                result = item['name']
            }
        }
        return result;
    }
};

//省市区
avalon.filters.addressFilter = function (str) {
    // avalon.log('地址编码:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        var _sep = str.split('#');

        var _province = _sep[0];
        var _city = _sep[1];
        var _area = _sep[2];
        var _addr = _sep[3];

        var finalResult = '';

        for (var i = 0; i < provinces.length; i++) {
            var item = provinces[i];
            if (_province == item['ProID']) {
                var result = item['ProName']
                finalResult = finalResult + result;
                // avalon.log(result)
            }
        }
        for (var i = 0; i < cities.length; i++) {
            var item = cities[i];
            if (_city == item['CityID']) {
                var result = item['CityName']
                finalResult = finalResult + result;
                // avalon.log(result)
            }
        }
        for (var i = 0; i < districts.length; i++) {
            var item = districts[i];
            if (_area == item['DisID']) {
                var result = item['DisName']
                finalResult = finalResult + result;
                // avalon.log(result)
            }
        }
        finalResult = finalResult + _addr;

        return finalResult;
    }
}

// 年收入
avalon.filters.thounsandFilter = function (str) {
    // avalon.log('千份位解释前:' + str)
    if (str == '' && str != '0') {
        return ''
    }
    else {
        return formatNum(str)
    }
}

//千份位分隔符
function formatNum(num) {
    return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

//千份位分隔符
function formatNumWithLetter(num) {
    var value = parseFloat(num);
    value = value / 10000;
    value = value.toFixed(2);
    return value;
}

//订单类型过滤器
avalon.filters.orderTypeFilter = function (str) {
    // avalon.log('订单类型代码:' + str)
    if (str == 0) {
        return '请选择'
    }
    else if (str == 1) {
        return '珍爱'
    }
    else if (str == 2) {
        return '精英智选'
    }
};

avalon.filters.ageFilter = function (str) {
    if (str == null || str == undefined) {
        return '';
    } else {
        var age = ages(str);
        if (age != '输入的日期格式错误！' && age != false) {
            return age;
        } else {
            return ''
        }
    }
};


avalon.filters.socialSecurityFilter = function (str) {
    if (str == null || str == undefined) {
        return '';
    } else {
        if (str == '0') {
            return '无社保';
        }
        else if (str == '1') {
            return '有社保-不以社保身份参加本计划';
        }
        else if (str == '2') {
            return '有社保-以社保身份参加本计划';

        }
    }
};

avalon.filters.twoNumberFilter = function (str) {
    return str.toFixed(2)
};
