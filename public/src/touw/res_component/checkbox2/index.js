
require('./index.css');

avalon.component('ms-checkbox2', {
    template: require('./index.html'),
    defaults: {
        title:'中信',
        isCheck:{
            isCheck:false
        },
        checkbox2:function(){
            this.isCheck.isCheck = !this.isCheck.isCheck;
        },
        onReady: function () {

        }
    }
});

