require('./index.css');

avalon.component('ms-new-bottom-button', {
    template: require('./index.html'),
    defaults: {
        title:'',
        isShowBack:true,
        isAgree:true,
        onReady: function () {

        },
        submit:function () {
        }
    }
});





