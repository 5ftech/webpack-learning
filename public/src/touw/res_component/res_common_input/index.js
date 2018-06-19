require('./index.css');
var inputFilter = require('../../lib/inputFilter')
avalon.component('ms-form-common-input', {
    template: require('./index.html'),
    defaults: {
        item_id: '',
        item: '',
        maxlength: '',
        type: 'text',
        placeholder: '',
        inputFilter: '',
        filterType: -1,
        onItemChanged: function (item) {//回调给上层
        },
        onReady: function () {
            var that = this
            $(function () {
                $("#" + that.item_id).blur("input", function () {
                    if (that.inputFilter == 'ON') {//只保留数字
                        this.value = inputFilter.keepOnlyNumber(this.value)
                    } else if (that.inputFilter == 'OW') {//只保留汉字
                        this.value = inputFilter.keepOnlyWord(this.value)
                    } else if (that.inputFilter == 'NL') {//保留数字与字母
                        this.value = inputFilter.keepNumberAndLetter(this.value)
                    } else if (that.inputFilter == 'EM') {//过滤非邮箱字段
                        this.value = inputFilter.keepEmail(this.value)
                    } else if(that.inputFilter == 'AM'){//过滤基本保额
                        this.value = inputFilter.replaceOtherExceptNumber(this.value);
                    } else if(that.inputFilter == "AD"){//过滤地址#号
                        this.value = inputFilter.relaceAddress(this.value)
                    } else if(that.inputFilter == 'WL'){//保留汉字和字母
                        this.value = inputFilter.keepLetterAndWord(this.value)
                    }
                    else {//不做过滤
                    }
                    //过滤后回调
                    that.onItemChanged(this.value)
                })
            })
        }
    }
});

avalon.filters.inputsFilter = function (item, type) {
    if(type == -1){
        if (item == undefined || item == '') {//空过滤
            return '';
        } else {
            switch (type) {
                case 0:
                    break;
                default:
                    return item;
            }
        }
    }
    else if (type == -2){
        if(item === 0){
            return '0';
        }else if (item === undefined || item === '') {//空过滤
            return '';
        } else {
            switch (type) {
                case 0:
                    break;
                default:
                    return item;
            }
        }
    }
    else {
        if(item === 0){
            return 0;
        }else if (item == undefined || item == '') {//空过滤
            return '';
        } else {
            switch (type) {
                case 0:
                    break;
                default:
                    return item;
            }
        }
    }


};
