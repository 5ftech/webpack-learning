require('./index.css');
var icTypes = require('./IcType');
var careers = require('./Career');
var Nationality = require('./Nationality');
function bodyScroll(event){
    if(event.srcElement.className != 'm_select_item'){
        event.preventDefault();
    }
}

avalon.component('ms-form-common-select-for-company', {
    template: require('./index.html'),
    defaults: {
        modalShow: false,
        items: [],//选择集合
        maxlength: '',
        placeholder: '',
        item: null,
        filterType: -1,//自定义过滤类型，默认不过滤 1-性别,2-与投保人关系,3-交费年间,4-证件类型,5-职业类别,6-国籍,7-机构选择
        modalWidth: '',
        modalHeight: '',
        isHiddenWord:false,
        close:function () {
            document.body.removeEventListener('touchmove',bodyScroll,false);
            this.modalShow = false;
        },
        openModal: function () {
            document.body.addEventListener('touchmove',bodyScroll,false);
            this.modalShow = true;
        },
        select: function (index) {
            document.body.removeEventListener('touchmove',bodyScroll,false);
            this.modalShow = false;
            this.item = this.items[index];
            this.onItemSelected(this.item);//回调
        },
        isNull:function(){
            if(this.filterType == 7){
                if(this.item == ''||this.item == null){
                    return true
                }else {
                    return false;
                }
            }
            if(this.item == 0){
                return false;
            }else{
                if(this.item == ''||this.item == null){
                    return true
                }else {
                    return false;
                }
            }
        },
        onItemSelected: function (item) {
        },
        onInit: function () {
            this.modalWidth = document.documentElement.clientWidth;
            this.modalHeight = document.documentElement.clientHeight;
        },
        onReady: function () {

        }
    }
});
avalon.filters.selectFilter = function (item, type) {
    if (item == null) {//空过滤
        return '';
    } else {
        switch (type) {
            case 1://性别
                if (item == '1' || item == '01' || item == 1) {
                    return '女'
                }
                else if (item == '0' || item == '00' || item ==0) {
                    return '男'
                }
                break;
            case 2://与投保人关系
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
            case 3://交费年间
                return item + '年';
                break;
            case 4://证件类型
                for (var i = 0; i < icTypes.length; i++) {
                    if (item == icTypes[i].code) {
                        return icTypes[i].name
                    }
                }
                break;
            case 5://职业类别
                for (var i = 0; i < careers.length; i++) {
                    if (item == careers[i].code) {
                        return careers[i].name
                    }
                }
                break;
            case 6://国籍
                for (var i = 0; i < Nationality.length; i++) {
                    if (item == Nationality[i].id) {
                        return Nationality[i].cn
                    }
                }
                break;
            case 7://机构选择
                switch (item){
                    case "ecitic":
                        return "中信银行股份有限公司信用卡中心";
                        break;
                    case "shenlaohr":
                        return "深圳市深劳人力资源开发有限公司";
                        break;
                    case "qymgc":
                        return "深圳易才人力资源顾问有限公司";
                        break;
                    case "shpudong":
                        return "前锦网络信息技术(上海)有限公司";
                        break;
                    case "gdhl":
                        return "广东鸿联九五信息有限公司";
                    default:
                        return "请选择机构"
                        break;
                }
            default:
                return item;
        }
    }

};




