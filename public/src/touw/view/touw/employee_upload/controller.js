/**
 * Created by brave on 17/12/10.
 */

//region 工具
var config = require('../../../config/config');
var interface = require('../../../config/interface.js');
var urlParams = require('../../../lib/util/url_params');
var validate = require('../../../lib/util/3-validate');
//endregion 工具

var vm = avalon.define({
    $id: "vm",

    //region 辅助数据
    aki_uploadbanner: require('./aki_uploadbanner.png'),
    aki_uploadbutton: require('./aki_uploadbutton.png'),
    aki_uploadpreview: require('./aki_uploadpreview.png'),
    anniu: require('./indexadd.png'),
    showUpload: false,
    id_card: '',
    uploadType: 1,
    order_type: config.order_type,
    orderId: '',
    userName: '',
    previewDownloadFileUrl: config.previewDownloadFileUrl,
    signatureFile: [],//体检文件
    IdsignatureFile: [],//证件文件
    UserInfo: '',
    msg: '',
    isLogin: false,
    //endregion 辅助数据

    //region 主逻辑
    getUserInfo: function () {
        avalon.log("CONTROLLER:getUserInfo()");
        var that = this;
        var deferred = Deferred();
        interface.post("getUserInfo", '')
            .then(function (data) {
                if (data.statusCode == 1) {
                    that.isLogin = true;
                    that.userInfo = data.data;
                    deferred.resolve()
                } else {
                    that.isLogin = false;
                    alertModal.open(data.msg, function () {
                        window.location.href = "isLogin.html?next=aki-8.html" + '&order_type=' + that.order_type + '&organization_id=' + that.organization_id;
                    });
                    deferred.reject(data.msg)
                }
            })
            .otherwise(function (res) {
                deferred.reject('系统超时');
            });
        return deferred.promise;
    },
    reload: function () {
        var deferred = Deferred();
        var that = this;
        location.reload()
        deferred.resolve();
        // deferred.reject();
        return deferred.promise;
    },
    getOrder: function (id) {
        var that = this;
        var deferred = Deferred();

        var dataToPost = {id: id};
        interface.post("getOrder", dataToPost)
            .then(function (data) {
                if (data.statusCode == 1) {
                    that.userName = data.data.insurer_name;
                    deferred.resolve()
                } else {
                    alertModal.open(data.msg, function () {
                        window.location.href = "isLogin.html?next=aki-8.html" + '&order_type=' + that.order_type + '&organization_id=' + that.organization_id;
                    });
                    deferred.reject(data.msg)
                }
            })
            .otherwise(function (res) {
                deferred.reject('系统超时');
            });

        return deferred.promise;
    },
    goToMyOrder: function () {
        var deferred = Deferred();
        var that = this;
        window.location.href = 'myOrder.html?' + 'order_type=' + that.order_type + '&organization_id=' + that.organization_id;
        return deferred.promise;
    },
    encodeName: function (value) {
        if (value) {
            return encodeURI(value);
        } else {
            return value
        }
    },
    getUserFile: function () {
        avalon.log("CONTROLLER:getUserFile");
        var that = this;
        var deferred = Deferred();
        var dataToPost = {orderId: that.orderId};
        interface.post("getUserFile", dataToPost)
            .then(function (data) {
                if (data.statusCode == 1) {
                    if (data.data.medicalReport.length > 0) {
                        that.signatureFile = data.data.medicalReport;
                    }
                    if (data.data.idCardReport.length > 0) {
                        that.IdsignatureFile = data.data.idCardReport;
                    }
                }
                deferred.resolve()
            })
            .otherwise(function (res) {
                deferred.reject('系统超时');
            });
        return deferred.promise;
    },
    initICUploadWidget: function (id_card) {
        var deferred = Deferred();
        var that = this;

        var Uploader = Q.Uploader;
        var uploader = new Uploader({
            url: config.host + config.uploadFileAppName + '/uploadUserFile?id_card_number=' + id_card + '&file_type=3',
            target: document.getElementById("upload_target_ic"),
            view: document.getElementById("upload-view-ic"),
            allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
            upName: "file",
            on: {
                //添加之前触发
                add: function (task) {
                    if (task.ext == '') {
                        task.name = task.name + '.jpg';
                        task.ext = '.jpg';
                        task.disabled = false;
                        task.state = 0
                    } else {
                        if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
                    }
                    // log(task.name + ": 已添加!");
                },

                //任务移除后触发
                remove: function (task) {
                },
                //取消上传任务后触发
                cancel: function (task) {
                },

                //上传之前触发
                upload: function (task) {
                    //exe文件可以添加，但不会上传
                    if (task.ext == ".exe") return false;
                },

                //上传完成后触发
                complete: function (task) {
                    if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!", 'ic');

                    var json = task.json;
                    if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />", 'ic');

                    var statusCode = JSON.parse(task.response).statusCode;

                    if (statusCode == -401) {
                        uploadFailHandler(task, 'ic');
                        alertModal.open("登录已失效,请重新登录！")
                    }
                    else if (statusCode != 1) {
                        uploadFailHandler(task, 'ic');
                        avalon.log(task.json)
                        alertModal.open(task.json.msg)
                    }
                    uploader.resetInput();

                    //this.list  为上传任务列表
                    //this.index 为当前上传任务索引
                    if (this.index >= this.list.length - 1) {
                        //所有任务上传完成
                        // log("所有任务上传完成：" + new Date());
                    }
                    return false;
                }

            }
        });

        deferred.resolve();
        // deferred.reject();
        return deferred.promise;
    },
    initMedicalUploadWidget: function (id_card) {
        var deferred = Deferred();
        var that = this;

        var Uploader = Q.Uploader;
        var uploader = new Uploader({
            url: config.host + config.uploadFileAppName + '/uploadUserFile?id_card_number=' + id_card + '&file_type=1',
            target: document.getElementById("upload_target_medical"),
            view: document.getElementById("upload-view-medical"),
            allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
            upName: "file",
            on: {
                //添加之前触发
                add: function (task) {
                    if (task.ext == '') {
                        task.name = task.name + '.jpg';
                        task.ext = '.jpg';
                        task.disabled = false;
                        task.state = 0
                    } else {
                        if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
                    }
                    // log(task.name + ": 已添加!");
                },

                //任务移除后触发
                remove: function (task) {
                },
                //取消上传任务后触发
                cancel: function (task) {
                },

                //上传之前触发
                upload: function (task) {
                    //exe文件可以添加，但不会上传
                    if (task.ext == ".exe") return false;
                },

                //上传完成后触发
                complete: function (task) {
                    if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!", 'medical');

                    var json = task.json;
                    if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />", 'medical');

                    var statusCode = JSON.parse(task.response).statusCode;

                    if (statusCode == -401) {
                        uploadFailHandler(task, 'medical');
                        alertModal.open("登录已失效,请重新登录！")
                    }
                    else if (statusCode != 1) {
                        uploadFailHandler(task, 'medical');
                        alertModal.open(task.json.msg)
                    }
                    uploader.resetInput();

                    //this.list  为上传任务列表
                    //this.index 为当前上传任务索引
                    if (this.index >= this.list.length - 1) {
                        //所有任务上传完成
                        // log("所有任务上传完成：" + new Date());
                    }
                    return false;
                }

            }
        });

        deferred.resolve();
        // deferred.reject();
        return deferred.promise;
    },
    initOtherUploadWidget: function (id_card) {
        var deferred = Deferred();
        var that = this;

        var Uploader = Q.Uploader;
        var uploader = new Uploader({
            url: config.host + config.uploadFileAppName + '/uploadUserFile?id_card_number=' + id_card + '&file_type=9',
            target: document.getElementById("upload_target_other"),
            view: document.getElementById("upload-view-other"),
            allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
            upName: "file",
            on: {
                //添加之前触发
                add: function (task) {
                    if (task.ext == '') {
                        task.name = task.name + '.jpg';
                        task.ext = '.jpg';
                        task.disabled = false;
                        task.state = 0
                    } else {
                        if (task.disabled) return alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
                    }
                    // log(task.name + ": 已添加!");
                },

                //任务移除后触发
                remove: function (task) {
                },
                //取消上传任务后触发
                cancel: function (task) {
                },

                //上传之前触发
                upload: function (task) {
                    //exe文件可以添加，但不会上传
                    if (task.ext == ".exe") return false;
                },

                //上传完成后触发
                complete: function (task) {
                    if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!", 'other');

                    var json = task.json;
                    if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />", 'other');

                    var statusCode = JSON.parse(task.response).statusCode;

                    if (statusCode == -401) {
                        alertModal.open("登录已失效,请重新登录！")
                        uploadFailHandler(task, 'other');
                    }
                    else if (statusCode != 1) {
                        alertModal.open(task.json.msg)
                        uploadFailHandler(task, 'other');
                    }
                    uploader.resetInput();

                    //this.list  为上传任务列表
                    //this.index 为当前上传任务索引
                    if (this.index >= this.list.length - 1) {
                        //所有任务上传完成
                        // log("所有任务上传完成：" + new Date());
                    }
                    return false;
                }

            }
        });

        deferred.resolve();
        // deferred.reject();
        return deferred.promise;
    },
    confirmUpload: function () {
        var deferred = Deferred();
        var that = this;
        var id_card = that.id_card
        that.validateIdCard()
            .then(function () {
                that.showUpload = true;
                $('#id_card').attr('disabled', 'true')
                that.initICUploadWidget(id_card)
                that.initMedicalUploadWidget(id_card)
                that.initOtherUploadWidget(id_card)
            })
            .otherwise(function (msg) {
                avalon.log("otherwise返回的错误信息");
                setTimeout(function () {
                    avalon.log(msg);
                    alertModal.open(msg)
                }, 50)
            });
        deferred.resolve();
        // deferred.reject();
        return deferred.promise;
    },
    //endregion 主逻辑

    // region 验证
    validateIdCard: function () {
        var deferred = Deferred();
        var that = this;
        var result = true;

        avalon.log("validateMyOrder:that.myOrder", {ic_number: that.id_card});

        //region 校验订单逻辑

        if (validate.checkIdNull({ic_number: that.id_card})) {
        } else {
            result = false;
            deferred.reject('证件号码不能为空')
        }
        if (validate.checkIcNumberSmallLetter({ic_number: that.id_card})) {
        } else {
            result = false;
            deferred.reject('证件号码不能出现小写字符')
        }
        if (validate.checkIcNumber({ic_number: that.id_card})) {

        } else {
            result = false;
            deferred.reject('')
        }
        if (result) {
            deferred.resolve();
        }
        return deferred.promise
    },

    // endregion 验证

    // region 监听数据
    bindListeners: function () {
        var deferred = Deferred();
        var that = this;

        // $('#id_card').blur(function () {
        //
        // });
        // that.$watch("id_card", function observe(newV, oldV) {
        //
        //
        // });


        deferred.resolve();
        // deferred.reject();
        return deferred.promise;
    },
    // endregion 监听数据

    //region 监听事件
    clickNext: function () {
        var that = this;
        window.location.href = 'myOrder.html?' + 'order_type=' + that.order_type + '&organization_id=' + that.organization_id;
    },
    //endregion 监听事件


});

vm.bindListeners();


function log(msg, id) {

    document.getElementById("log" + '-' + id).innerHTML += (msg != undefined ? msg : "") + "<br />";
}

function uploadFailHandler(task, id) {
    // $('#upload-view .' + task.id).css("display", 'none');
    $('#upload-view-' + id + ' .' + task.id).remove();
    $('br').remove();
    log(task.name + ": 上传失败,请重试<br />", id)
}