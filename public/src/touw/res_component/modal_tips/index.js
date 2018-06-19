/**
 * Created by brave on 17/3/28.
 */

require('./index.css');

avalon.component('ms-modal-tips', {
    defaults: {
        title:'系统提示',
        content:'默认值',
        cancel:'',
        confirm:'确认',
        isShowModal: false,
        closeCallback: function () {
            avalon.log('关闭回调带没有绑定');
        },
        modal_confirm: function () {
            this.isShowModal = false;
            this.closeCallback();
        },
        modal_cancel: function () {
            this.isShowModal = false;
        },
        open:function(text, callback){
            this.content = text;
            this.isShowModal = true;
            if(callback){
                this.closeCallback = callback;
            }else{
                this.closeCallback = null;
            }
        },
        onInit: function () {
            this.modalWidth = document.documentElement.clientWidth;
            this.modalHeight = document.documentElement.clientHeight;
        },
        onReady: function () {
            avalon.log('WIDGET:alert:onReady()');
            window.alertModal = this;
        }

    },
    template: require('./index.html')
});

