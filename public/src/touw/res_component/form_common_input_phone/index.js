require('./index.css');
var inputFilter = require('../../lib/inputFilter')
avalon.component('ms-form-common-input-phone', {
    template: require('./index.html'),
    defaults: {
        item_id: '',
        item: '',
        item2: '',
        item2_is_show: '',
        maxlength: '',
        type: 'text',
        placeholder: '',
        inputFilter: '',
        filterType: -1,
        onItemChanged: function (item) {//回调给上层
        },
        switchInput:function () {
            var that = this;
            that.item2_is_show = false;
            $("#" + that.item_id).focus()
        }
        ,
        onReady: function () {
            var that = this;
            $(function () {
                $("#" + that.item_id).blur("input", function () {
                    if (that.inputFilter == 'ON') {//只保留数字

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

                    if(this.value.length == 11){
                        that.item2_is_show = true;
                        that.item2 = this.value.slice(0,3)+"-"+ this.value.slice(3,7) + "-"+this.value.slice(7,11);
                    }else{
                        that.item2_is_show = false;
                    }
                    //过滤后回调
                    that.onItemChanged(this.value)
                })
            })
        }
    }
});

avalon.filters.inputsFilter_phone = function (item) {
        if(item.length == 11){
            console.log(item.slice(0,3));
            console.log(item.slice(3,7));
            console.log(item.slice(7,11));
            item = item.slice(0,3)+"-"+ item.slice(3,7) + "-"+item.slice(7,11);
        }
        return item;

        // switch (type) {
        //     case 0:
        //         break;
        //     default:
        // }

};
