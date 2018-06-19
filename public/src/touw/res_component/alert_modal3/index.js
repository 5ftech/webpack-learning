/**
 * Created by brave on 17/3/28.
 */

require('./index.css');

avalon.component('ms-alert-modal3', {
    defaults: {
        modalId: 'defautModal3',
        title: '系统提示',
        content: '默认值',
        cancel: '',
        name: '',
        day_to_pay: '',
        insured_amount: '',
        confirm: '确认',
        isShowModal: false,
        closeCallback: function () {
            avalon.log('关闭回调带没有绑定');
        },
        setData: function (name, day_to_pay, insured_amount) {
            var that = this;
            this.name = name
            this.day_to_pay = day_to_pay
            this.insured_amount = insured_amount
        },
        modal_confirm: function () {
            this.isShowModal = false;
            // avalon.log(window.document.getElementById("#defautModal3").style.display);
            // window.document.getElementById("#defautModal3").style.display = "none";
            $(".defautModal3").css("display", "none")
            this.closeCallback();
        },
        modal_cancel: function () {
            this.isShowModal = false;
            // window.document.getElementById("#defautModal3").style.display = "none";
            $(".defautModal3").css("display", "none")

        },

        open: function (text, callback) {
            this.content = text;
            this.isShowModal = true;
            // window.document.getElementById("#defautModal32").style.display = "block";
            $(".defautModal3").css("display", "block")

            if (callback) {
                this.closeCallback = callback;
            } else {
                this.closeCallback = false;
            }
        },
        onInit: function () {
            // this.modalWidth = document.documentElement.clientWidth;
            // this.modalHeight = document.documentElement.clientHeight;
        },
        onReady: function () {
            avalon.log('WIDGET:alert:onReady()');
            window.alertModal3 = this;
        }

    },
    template: require('./index.html')
});

