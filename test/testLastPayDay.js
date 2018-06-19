var avalon = console;

var lastPayDay = function (updateDate, birthday) {

    var that = this;

    //这个过滤器是比较订单的最后更新日期与生日的日期，决定用户在什么时间内支付完成的
    //如果用户的订单最后更新日期+15天，少于生日，以这个为准备
    //如果用户的订单最后更新日期+15天，大于生日，以生日为准
    var now = new Date()

    updateDate = updateDate.substring(0, 10)
    updateDate = updateDate.replace(/\-/g, '/')
    updateDate = new Date(updateDate)
    updateDate = new Date(updateDate.getTime() + (2 * 24 * 3600 * 1000))

    birthday = new Date(birthday);
    birthday = new Date(now.getFullYear() + '/' + (birthday.getMonth() + 1) + '/' + birthday.getDate())


    var lastPayDay;
    var updateDateAdd15DayMilliseconds = updateDate.getTime() + (14 * 24 * 3600 * 1000);

    if (updateDate.getTime() <= birthday.getTime() && birthday.getTime() < updateDateAdd15DayMilliseconds) {
        lastPayDay = birthday
    } else {
        lastPayDay = new Date(updateDateAdd15DayMilliseconds)
    }
    lastPayDay = new Date(lastPayDay.getTime() - (1 * 24 * 3600 * 1000))
    var display = lastPayDay.getFullYear() + '年' + (lastPayDay.getMonth() + 1) + '月' + lastPayDay.getDate() + '日'
    avalon.log('++++++++++++++++++++++++ payday', display)
    return display
}

lastPayDay('2018-06-02', '1990-06-05');