/**
 * Created by brave on 17/3/28.
 */

var env = NODE_ENV;
var envHost = ENV_HOST;
var companyName = '';
var source = 'touw';
var serverUrl = '/gis_server';
var lifeTimeInsurancePeriod = 100;//终生保险起期间
var type = '401';
var object = {
    type: type,
    source: source,
    companyName: companyName,
    lifeTimeInsurancePeriod: lifeTimeInsurancePeriod,
    companyShortName: '',
    envHost: envHost,
    env: env,
    serverUrl: serverUrl,
    host: '',//项目主机
    loginCodeUrl: serverUrl + '/' + env + '/getAuthImage',//上传文件的主机ip及相对路径
    payUrl: 'http://esales-old.test-cignacmb.com/payment-uat1/index.xhtml',//上传文件的主机ip及相对路径
    appName: serverUrl + '/' + env + '/op/' + source,//项目接口appName
    payAppName: serverUrl + '/' + env,//用于支付成功回调页获取列表appName
    uploadFileAppName: serverUrl + '/' + env + '/file/' + source,//项目接口appName
    notifyConfirmUrl: serverUrl + '/' + env + '/notifyConfirm?source=' + source,//项目下载投保确认书路径
    downLoadBodyCheckUrl: serverUrl + '/' + env + '/downLoadBodyCheck?source=' + source,//项目下载投保确认书路径
    downloadConfirmUrl: serverUrl + '/' + env + '/downloadConfirm?source=' + source,//项目下载投保确认书路径
    previewDownloadFileUrl: serverUrl + '/' + env + '/downLoadBodyCheck?source=' + source,//项目下载投保确认书路径
    notLoginRedirectUrl: serverUrl + '/' + env + '/opr/' + source + '/userIdentification',//项目下载投保确认书路径
    token: ''
};
if (env == 'uat' || env == 'uat2') {
    object.payUrl = ''
}
if (env == 'prd') {
    object.notLoginRedirectUrl = serverUrl + '/' + env + '/opr/' + source + '/userIdentification';
}
module.exports = object;