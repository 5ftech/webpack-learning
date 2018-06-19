require('./index.css');

avalon.component('ms-title-top', {
    template: require('./index.html'),
    defaults: {
        title:'',
        onReady: function () {
            avalon.log('WIDGET:header-onReady()');
            avalon.log('WIDGET:header-判断是否微信');
            var that = this;
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                that.isDisplay = false;
            }
        }
    }
});





