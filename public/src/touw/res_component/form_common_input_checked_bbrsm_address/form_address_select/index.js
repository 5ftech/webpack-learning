/**
 * Created by brave on 17/3/28.
 */

var provinces = require('../Pro');
var cities = require('../City');
var districts = require('../District');
require('./index.css');
require('../../form_common_input/index')

avalon.component('ms-form-address-select-for-taxinfo', {
    template: require('./index.html'),
    defaults: {
        randomId: parseInt(Math.random() * 100000),
        modalHeight: '',
        modalWidth: '',
        contact_address: '',
        addressDisplay: '',
        provinceModalShow: false,
        cityModalShow: false,
        districtModalShow: false,
        provinces: provinces,
        cities: [],
        districts: [],
        selectedProvince: '0',
        selectedCity: '0',
        selectedDistrict: '0',
        detailAddress: '',
        isJunGuan: false,

        onItemChanged: function (v) {//上层需要绑定的回调

        },


        click: function () {
            this.provinceModalShow = true;

        },

        selectPro: function (index) {
            this.selectedProvince = this.provinces[index];
            this.getCitiesByProvince(this.selectedProvince.id);
            this.provinceModalShow = false;
            this.cityModalShow = true;
        },
        selectCity: function (index) {
            this.selectedCity = this.cities[index];
            this.getDistrictsByCity(this.selectedCity.id);
            this.cityModalShow = false;
            this.districtModalShow = true;
        },
        selectDist: function (index) {
            this.selectedDistrict = this.districts[index];
            this.districtModalShow = false;
            this.combineAddress();
        },

        combineAddress: function () {
            if (this.selectedProvince != '0') {
                var contact_address = this.selectedProvince.id + '#' + this.selectedCity.id + '#' + this.selectedDistrict.id + '#' + this.detailAddress;
                // avalon.log(contact_address)
                this.addressDisplay = this.selectedProvince.name + ' ' + this.selectedCity.name + ' ' + this.selectedDistrict.name;
                this.onItemChanged(contact_address);
            }
        },
        resetAddress: function () {
            var contact_address = '';
            this.detailAddress = '';
            this.addressDisplay = '';
            this.selectedProvince = '0';
            this.selectedCity = '0';
            this.selectedDistrict = '0';
            this.onItemChanged(contact_address);
        },
        extractAddressInfo: function () {
            var that = this;
            if (this.contact_address != '') {
                var _sep = that.contact_address.split('#');
                that.selectedProvince = that.getProFromId(_sep[0]);
                that.selectedCity = that.getCityFromId(_sep[1]);
                that.selectedDistrict = that.getDisFromId(_sep[2]);
                that.detailAddress = _sep[3];
                that.combineAddress();
            } else {
                that.resetAddress()
            }

        },
        getProFromId: function (id) {
            for (var i = 0; i < provinces.length; i++) {
                var pro = provinces[i]
                if (pro.id == id) {
                    return pro
                }
            }
        },
        getCityFromId: function (id) {
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i]
                if (city.id == id) {
                    return city
                }
            }
        },
        getDisFromId: function (id) {
            for (var i = 0; i < districts.length; i++) {
                var dis = districts[i]
                if (dis.id == id) {
                    return dis
                }
            }
        },
        getCitiesByProvince: function (proId) {
            var list = [];
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];
                if (city.id.substring(0, 2) == proId) {
                    list.push(city);
                }
            }
            this.cities = list;
            return this.cities;
        },
        getDistrictsByCity: function (cityId) {
            var list = [];
            for (var i = 0; i < districts.length; i++) {
                var district = districts[i];
                if (district.id.substring(0, 4) == cityId) {
                    list.push(district);
                }
            }
            this.districts = list;
            return this.districts;
        },
        onInit: function () {
            this.modalWidth = document.documentElement.clientWidth;
            this.modalHeight = document.documentElement.clientHeight;
        },
        onReady: function () {
            var that = this;
            that.extractAddressInfo();
            window.contactAddress = this;
        },


        contact_addressListener: function () {
            var that = this;
            that.extractAddressInfo();
        },

        onProvinceChanged: function (item) {
            this.selectedProvince = item;
            this.combineAddress();
        },
        onCityChanged: function (item) {
            this.selectedCity = item;
            this.combineAddress();
        },
        onDistrictChanged: function (item) {
            this.selectedDistrict = item;
            this.combineAddress();
        },
        onDetailAddressChanged: function (v) {
            this.detailAddress = v;
            this.combineAddress();
        }


    }
});


