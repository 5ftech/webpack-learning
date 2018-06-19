/**
 * Created by brave on 17/3/28.
 */

require('./index.css');

avalon.component('ms-alert-modal2', {
    defaults: {
        modalId:'defautModal2',
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
            // avalon.log(window.document.getElementById("#defautModal2").style.display);
            // window.document.getElementById("#defautModal2").style.display = "none";
            $(".defautModal2").css("display","none")
            this.closeCallback();
        },
        modal_cancel: function () {
            this.isShowModal = false;
            // window.document.getElementById("#defautModal2").style.display = "none";
            $(".defautModal2").css("display","none")

        },

        open:function(text, callback){
            this.content = text;
            this.isShowModal = true;
            // window.document.getElementById("#defautModal22").style.display = "block";
            $(".defautModal2").css("display","block")

            if(callback){
                this.closeCallback = callback;
            }else{
                this.closeCallback = false;
            }
        },
        onInit: function () {
            // this.modalWidth = document.documentElement.clientWidth;
            // this.modalHeight = document.documentElement.clientHeight;
        },
        onReady: function () {
            avalon.log('WIDGET:alert:onReady()');
            window.alertModal2 = this;
        }

    },
    template: require('./index.html')
});

