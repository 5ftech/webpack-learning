/**
 * Created by brave on 17/3/28.
 */

require('../lib/uploader.css');
require('../lib/progress.gif');
require('../lib/Q.Uploader.all');

var hostConfig = require('../../../config/config');


require('./index.css');

avalon.component('ms-uploader', {
    template: require('./index.html'),
    defaults: {
        randomId: '',
        orderId: 0,
        type: 0,
        show: true,
        uploader: '',
        onUploadSuccess: function () {

        },
        onUploadFail: function () {

        },
        resetInput: function () {
            avalon.log('resetInput')
            window.uploader.resetInput();
        },
        onInit: function () {
            this.randomId = parseInt(Math.random() * 100000);
        },
        onReady: function () {
            var that = this;

            var Uploader = Q.Uploader;
            window.uploader = new Uploader({
                url: hostConfig.host + hostConfig.uploadFileAppName + '/uploadFile?order_id=' + that.orderId + '&file_type=' + that.type,
                target: document.getElementById("upload-target"),
                view: document.getElementById("upload-view"),
                allows: ".jpg,.jpeg,.png,.gif,.pdf,.JPG,.JPEG,.PNG,.GIF,.PDF",
                upName: "file",

                //每次上传都会发送的参数(POST方式)
                // data: {user: "Devin"},

                /*
                 上传回调事件：
                 init,          //上传管理器初始化完毕后触发

                 select,        //点击上传按钮准备选择上传文件之前触发,返回false可禁止选择文件
                 add[Async],    //添加任务之前触发,返回false将跳过该任务
                 upload[Async], //上传任务之前触发,返回false将跳过该任务
                 send[Async],   //发送数据之前触发,返回false将跳过该任务

                 cancel,        //取消上传任务后触发
                 remove,        //移除上传任务后触发

                 progress,      //上传进度发生变化后触发(仅html5模式有效)
                 complete       //上传完成后触发
                 */

                on: {
                    //添加之前触发
                    add: function (task) {
                        //不会添加exe文件
                        //if (task.ext == ".exe") return false;

                        if (task.disabled) {
                            if (alertModal) {
                                alertModal.open("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf', function () {

                                })
                            } else {
                                alert("允许上传的文件格式为：" + 'jpg,jpeg,png,gif,pdf');
                            }
                        }
                        ;
                        // log(task.name + ": 已添加!");
                    },

                    //任务移除后触发
                    remove: function (task) {
                    },

                    //上传之前触发
                    upload: function (task) {
                        //exe文件可以添加，但不会上传
                        if (task.ext == ".exe") return false;
//                if (task.size > 1024 * 10) {
//                    alert("上传的附件不能大于10MB")
//                    return false;
//                }
                        //可针对单独的任务配置参数(POST方式)
                        // task.data = {name: task.name + "_" + Date.now()};
                    },

                    //上传完成后触发
                    complete: function (task) {
                        if (task.state != Uploader.COMPLETE) return log(task.name + ": " + Uploader.getStatusText(task.state) + "!");

                        var json = task.json;
                        if (!json) return log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />");

                        var statusCode = JSON.parse(task.response).statusCode;
                        if (statusCode != 1) {
                            uploadFailHandler(task);
                        }
                        log();

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

            // setTimeout(function () {
            //     setInterval(function () {
            //         that.resetInput();
            //     }, 1000);
            // }, 3000)

            // this.$watch("show", function observe(newV, oldV) {
            //     if (newV) {
            //         document.getElementById(that.randomId).style('display', 'block');
            //         // that.resetInput();
            //     } else {
            //         document.getElementById(that.randomId).style('display', 'none');
            //     }
            // });


            if (!this.show) {
                document.getElementById('uploader').style.display = 'none';
            }

            //ie67的bug,如果一开始是隐藏的，那么，需要每隔一段时间刷新输入值
            // setInterval(function () {
            //     avalon.log('resetUploadInput');
            //     uploader.resetInput();
            // }, 1000)

            setTimeout(function () {
                window.uploader.resetInput();
            }, 2000)

        }
    }
});

function log(msg) {
    document.getElementById("log").innerHTML += (msg != undefined ? msg : "") + "<br />";
}

function uploadFailHandler(task) {
    $('#upload-view .' + task.id).css("display", 'none');
    log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />")
}
