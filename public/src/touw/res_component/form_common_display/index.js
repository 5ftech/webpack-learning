require('./index.css');

avalon.component('ms-form-common-display', {
    template: require('./index.html'),
    defaults: {
        msg:'-',
        filterType:-1,//1-与投保人关系，2-性别
        onReady: function () {

        }
    }
});
avalon.filters.displayFilter = function (item, type) {
    if (item == undefined || item == '') {//空过滤
        return '';
    } else {
        switch (type) {
            case 1://与投保人关系
                if (item == '' && item != '0') {
                    return ''
                }
                else if (item == '00') {
                    return '本人'
                }
                else if (item == '01') {
                    return '配偶'
                }
                else if (item == '02') {
                    return '父母'
                }
                else if (item == '03') {
                    return '子女'
                }
                else if (item == '13') {
                    return '配偶父母'
                }
                break;
            case 2:
                if (item == '1' || item == '01' || item == 1) {
                    return '女'
                }
                else if (item == '0' || item == '00' || item ==0) {
                    return '男'
                }
                break;
            default:
                return item;
        }
    }

};



