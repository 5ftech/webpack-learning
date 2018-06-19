require('./index.css');
require('./form_address_select');
var cns = require('../../lib/dic/nationalities');
var pros = require('../../lib/dic/provinces');
var cities = require('../../lib/dic/cities');
var dists = require('../../lib/dic/districts');
var img001 = require('./add.png')
avalon.component('ms-form-common-input-checked-bbrsm-address', {
    template: require('./index.html'),
    defaults: {
        img001: img001,
        $id: "test",
        toggle: false,
        cns: cns,
        cities: cities,
        pros: pros,
        dists: dists,
        taxCountryNumbers: 1,
        add: [
            {isShowback: true},
            {isShowback: false},
            {isShowback: false}
        ],
        candidateLivePros: pros,
        candidateLiveCities: [{"id": "1101", "name": "市辖区"}, {"id": "1102", "name": "县"}],
        candidateLiveArea: [{"id": "110101", "name": "东城区"}, {"id": "110102", "name": "西城区"}],

        candidateBirthPros: pros,
        candidateBirthCities: [{"id": "1101", "name": "市辖区"}, {"id": "1102", "name": "县"}],
        candidateBirthArea: [{"id": "110101", "name": "东城区"}, {"id": "110102", "name": "西城区"}],

        jumingguo: [],
        non_taxpayer_no_List: [0, 1],

        bbbbbb: false,
        cccccc: false,
        // taxInfo:{},
        taxInfo: {//被保人税收声明

            id_card: '',
            live_country_cn: 'CHN',
            live_province_cn: '0',
            live_city_cn: '0',
            live_area_cn: '0',

            birth_country_cn: 'CHN',
            birth_province_cn: '0',
            birth_city_cn: '0',
            birth_area_cn: '0',

            taxpayer_no_one_country: 'CHN',
            taxpayer_no_one: '',
            non_taxpayer_no_one: '',
            non_taxpayer_no_one_reason: '',

            taxpayer_no_tow_country: 'CHN',
            taxpayer_no_two: '',
            non_taxpayer_tow_one: '',
            non_taxpayer_no_tow_reason: '',

            taxpayer_no_three_country: 'CHN',
            taxpayer_no_three: '',
            non_taxpayer_no_three: '',
            non_taxpayer_no_three_reason: ''

        },
        combineAddress: function (id) {

        },
        onItemSelected: function (item) {

        },
        clickReason: function (v) {
            this.jumingguo[v].non_taxpayer_no = 0;
        },

        /*点击添加就出现*/
        clickAdd: function () {

        },
        clickDelete: function (index) {

        },

        clickNoPublish: function (index) {
        },
        onReady: function () {

        }
    }
});





