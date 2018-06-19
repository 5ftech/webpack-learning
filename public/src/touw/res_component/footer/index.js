/**
 * Created by wufan on 17/9/25.
 */
require('./index.css');

avalon.component('ms-footer', {
    template: require('./index.html'),
    defaults: {
        mobile: false,
        mobileShow: true,
        resFooterTime: 1000,//底部加载时间
        onReady: function () {
            var that = this;

            if (document.body.clientWidth < 750) {
                that.mobile = true
                $("#res_footer").css("padding", "20px 5px")
                if (!that.mobileShow) {
                    $("#res_footer").css("display", "none")
                }
            } else {
                that.mobile = false;
                avalon.log('WIDGET:footer:onReady()：根据页面计算footer的margin-top');
                // var footerHeight = document.body.clientHeight;
                // var screenHeight = document.documentElement.clientHeight;
                // var disHeight = screenHeight - footerHeight + 29;
                // if (footerHeight < screenHeight) {
                //     document.getElementById('ms-footer').style.marginTop = disHeight + 'px'
                // } else {
                //     document.getElementById('ms-footer').style.marginTop = disHeight + 'px'
                // }

                setTimeout(function () {
                    $("#res_footer").css("display", "block");
                    var screenHeight = $(window).height();
                    var htmlHeight = $(document.body).height();
                    var disHeight = screenHeight - htmlHeight;
                    if (screenHeight > htmlHeight) {
                        document.getElementById('res_footer').style.marginTop = disHeight + 'px';
                    }
                },that.resFooterTime)
            }

            $(window).resize(function () {

                if (document.body.clientWidth < 750) {
                    $("#res_footer").css("padding", "20px 5px");
                    that.mobile = true;
                    $("#res_footer").css("display", "none")

                } else {
                    $("#res_footer").css("padding", "50px 5px");
                    $("#res_footer").css("display", "block")

                }


            })
        }
    }
});

