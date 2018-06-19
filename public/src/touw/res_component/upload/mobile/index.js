/**
 * Created by brave on 17/3/28.
 */

require('../lib/uploader.css');
require('../lib/progress.gif');
 var anniu = require('./img1.png')

require('../lib/Q.Uploader.all');
var uploadImg = require("./indexadd.png")
var urlParams = require('../../../lib/util/url_params');
var hostConfig = require('../../../config/config');
var urlParamsType = urlParams.getQueryString('type');


require('./index.css');

avalon.component('ms-mobile-uploader', {
    template: require('./index.html'),
    defaults: {
        uploadImg: uploadImg,
        userName: '',
        orderId: 0,
        typeUpload: 101,
        type: 1,
        anniu: anniu,
        onUploadSuccess: function () {

        },
        onUploadFail: function () {

        },
        onReady: function () {
            var that = this;

            var Uploader = Q.Uploader;

            var uploader = new Uploader({
                url: hostConfig.host + hostConfig.uploadFileAppName + '/uploadFile?order_id=' + that.orderId + '&file_type=' + that.type + '&type=' + urlParamsType,
                // + '&mobile=mobile',
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

                        if (statusCode == -401) {
                            alertModal.open("登录已失效,请重新登录！")
                        }
                        else if (statusCode != 1) {
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

        }
    }
});


// //错误提示信息
// function error_tips(value) {
//     var tmp = ['<div id="error_tips" class="tips_contain" style="display: block">',
//         '    <table>',
//         '        <tbody>',
//         '        <tr>',
//         '            <td>',
//         '                <div class="tips_contain_div">',
//         '                                        <span id="tips" >' + value + '</span>',
//         '                    <div id="error_btn"  class="tips_close_btn">ok',
//         '                    </div>',
//         '                </div>',
//         '            </td>',
//         '        </tr>',
//         '        </tbody>',
//         '    </table>',
//         '</div>'].join("");
//
//     $('body').prepend(tmp);
//
//     $('#error_btn').click(function () {
//         $('#error_tips').remove();
//     });
// }

function log(msg) {
    document.getElementById("log").innerHTML += (msg != undefined ? msg : "") + "<br />";
}
function uploadFailHandler(task) {
    // $('#upload-view .' + task.id).css("display", 'none');
    $('#upload-view .' + task.id).remove();
    $('br').remove();
    log(task.name + ": 上传失败,请保证上传大小在10M内;上传不超过80个文件！<br />")
}
