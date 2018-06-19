/**
 * Created by brave on 17/4/13.
 */

var nationalities = require('../dic/nationalities');
var provinces = require('../dic/provinces');
var cities = require('../dic/cities');
var districts = require('../dic/districts');

var distRule = {
    getCitiesByProvince: function (proId) {
        var list = [];
        for (var i = 0; i < cities.length; i++) {
            var city = cities[i];
            if (city.id.substring(0, 2) == proId) {
                list.push(city);
            }
        }
        return list;
    },
    getDistrictsByCity: function (cityId) {
        var list = [];
        for (var i = 0; i < districts.length; i++) {
            var district = districts[i];
            if (district.id.substring(0, 4) == cityId) {
                list.push(district);
            }
        }
        return list;
    },
    getCountryName: function (id) {
        var name = '';
        var list = nationalities;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.id == id) {
                name = item.cn
            }
        }
        return name;
    },
    getProvinceName: function (id) {
        var name = '';
        var list = provinces;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.id == id) {
                name = item.name
            }
        }
        return name;
    },
    getCityName: function (id) {
        var name = '';
        var list = cities;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.id == id) {
                name = item.name
            }
        }
        return name;
    },
    getDistName: function (id) {
        var name = '';
        var list = districts;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.id == id) {
                name = item.name
            }
        }
        return name;
    }
};


module.exports = distRule;