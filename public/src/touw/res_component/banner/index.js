/**
 * Created by wufan on 17/9/25.
 */
require('./index.css');

avalon.component('ms-banner', {
    template: require('./index.html'),
    defaults: {
        mobile:false,
        onReady: function () {
            var that = this;


            if (document.body.clientWidth < 750) {
                that.mobile = true

            } else {
                that.mobile = false
            }

            $(window).resize(function () {

                if (document.body.clientWidth < 750) {
                    that.mobile = true

                } else {
                    that.mobile = false
                }


            })
        }
    }
});

