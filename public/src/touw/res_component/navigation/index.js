var interface = require('../../config/interface');
var config = require('../../config/config');
require('./index.css');

//cataloguebool产品目录

avalon.component('ms-navigation', {
    template: require('./index.html'),
    defaults: {
        status: 0,//0 默认两者显示 1,显示产品目录  2,我的订单
        isCall: false,
        isLogin: false,
        isMyOrder: false,
        mobile: false,
        order_type:config.order_type,
        organization_id:'',
        navActive:'',
        Ygsmstatus:1,
        goToLogin: function () {
            window.location.href = 'login.html?order_type='+ this.order_type + "&organization_id=" + this.organization_id;
        },
        goToindex:function () {
            window.location.href = 'index.html?order_type='+ this.order_type + "&organization_id=" + this.organization_id;
        },
        logOut: function () {
            var deferred = Deferred();
            var that = this
            interface.post("userLogOut")
                .then(function (data) {
                    if (data.statusCode == 1 || data.statusCode == '1') {
                        window.alertModal.open('您已成功退出登录', function () {
                            location.href = 'login.html?order_type='+ that.order_type + "&organization_id=" + that.organization_id;
                        })
                    } else {
                        window.alertModal.open(data.msg)
                    }
                })
                .otherwise(function (res) {
                    window.alertModal.open('系统超时');
                });
            return deferred.promise;
        },
        goToMyOrder: function () {
            var deferred = Deferred();
            var that = this;
            interface.post("getUserInfo", '')
                .then(function (data) {
                    if (data.statusCode == 1) {
                        vm.isLogin = true;
                        location.href = 'myOrder.html?order_type='+ that.order_type + "&organization_id=" + that.organization_id;
                    } else {
                        vm.isLogin = false;
                        alertModal.open("您尚未登录，点击确定为您跳转至登录页", function () {
                            location.href = 'login.html' + '?next=myOrder.html';
                        });
                    }
                })
                .otherwise(function (res) {
                    deferred.reject('系统超时');
                });
            return deferred.promise;
        },
        goToProduct: function () {
            window.location.href = 'index.html?order_type='+ this.order_type + "&organization_id=" + this.organization_id;
        },
        onReady: function () {
            var that = this;

            if (document.body.clientWidth < 750) {
                that.mobile = true;
            } else {
                that.mobile = false;

            }
            $(window).resize(function () {
                if (document.body.clientWidth < 750) {
                    that.mobile = true;

                } else {
                    that.mobile = false;

                }

            })

        }
    }
});





