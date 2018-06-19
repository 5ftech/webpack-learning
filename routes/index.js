var express = require('express');
var router = express.Router();

var appName = '/gis_server/' + 'sit' + '/op/cmbnt';

//短信验证码
router.post(appName + '/sendVcode', function (req, res, next) {
    var json = {
        "statusCode": 1,
        "msg": "发送成功"
    }
    res.send(json);
});




module.exports = router;
