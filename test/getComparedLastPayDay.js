var avalon = console
var vm = {
    getLastPayDay: function (updateDate, birthday) {

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
        var display = lastPayDay.getFullYear() + '/' + (lastPayDay.getMonth() + 1) + '/' + lastPayDay.getDate()
        avalon.log('++++++++++++++++++++++++ payday', display)
        return display


    },
    bubbleSort: function (birthdaysInMills) {
        var that = this;

        var len = birthdaysInMills.length, j;
        var temp;
        while (len > 1) {
            for (j = 0; j < len - 1; j++) {
                if (birthdaysInMills[j] > birthdaysInMills[j + 1]) {
                    temp = birthdaysInMills[j];
                    birthdaysInMills[j] = birthdaysInMills[j + 1];
                    birthdaysInMills[j + 1] = temp;
                }
            }
            len--;
        }
        return birthdaysInMills;

    },
    getCamparedLastPayDay: function (birthdaysInMills) {
        var that = this;
        var lastPayDayInMills = new Date(that.bubbleSort(birthdaysInMills)[0])
        var result = lastPayDayInMills.getFullYear() + '年' + (lastPayDayInMills.getMonth() + 1) + '月' + lastPayDayInMills.getDate() + '日'
        console.log(result)
        return result
    },
}

var days = ['2018-01-01', '2018-06-03', '2018-06-07']
var birthdaysInMills = [];
for (var i = 0; i < days.length; i++) {
    var birthday = days[i];
    var lastPayDay = vm.getLastPayDay('2018-06-04', birthday)
    birthdaysInMills.push(new Date(lastPayDay).getTime())
}
console.log(birthdaysInMills)

vm.getCamparedLastPayDay(birthdaysInMills)


