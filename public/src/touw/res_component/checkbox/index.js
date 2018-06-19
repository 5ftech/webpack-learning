require('./index.css');

avalon.component('ms-checkbox', {
    template: require('./index.html'),
    defaults: {
        title:'中信',
        isCheck:{
            isCheck:false
        },
        checkbox:function(){
          this.isCheck.isCheck = !this.isCheck.isCheck;
        },
        onReady: function () {

        }
    }
});





