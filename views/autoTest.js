/**
 * Created by gthowe on 2017/10/29.
 */
//依赖
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

//封装方法
function getId(id, element) {
    if (element) {
        return element.findElement(By.id(id))
    }
    return driver.findElement(By.id(id))
}
function getClass(className, element) {
    if (element) {
        return element.findElement(By.className(className))
    }
    return driver.findElement(By.className(className))
}
function getTag(tag, element) {
    if (element) {
        return element.findElement(By.tagName(tag))
    }
    return driver.findElement(By.tagName(tag))

}
function getPath(path) {
    return driver.findElement(By.xpath(path))
}
function getText(text, element) {
    if (element) {
        return element.findElement(By.partialLinkText(text))
    }
    return driver.findElement(By.partialLinkText(text));
}


//自动测试的网址
var getIPAdress = function () {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};
var address = getIPAdress();
var url = 'http://' + address + ':8050/login.html?organization_id=msbank&order_type=401';
driver.get(url);

getId("mobileInput").sendKeys(15815955454);

// driver.sleep(1000)
//     .then(function () {
//         driver.sleep(500).then(function () {//登录页信息
//
//             getPath("//input[@title='图形验证码']").sendKeys("8888");
//             getPath("//input[@title='短信验证码']").sendKeys("8888");
//             driver.sleep(500).then(function () {
//                 getId("next").click();
//             });
//         })
//     })
//     .then(function () {
//         driver.sleep(500).then(function () {//详情页
//             getId("detailClick").click();
//         });
//     })
//     .then(function () {
//
//     })
//     .then(function () {
//
//     })
