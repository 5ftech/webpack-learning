/**
 * Created by gthowe on 2017/10/29.
 */
//依赖
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

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


driver.get(url);


driver.sleep(1000)
    .then(function () {
        driver.sleep(1000).then(function(){
            getId("mobileInput").sendKeys("13535012012")
        })

    })

.catch(function (error) {
    console.log(error)
})






// driver.findElement(By.id('su')).click();
// driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
