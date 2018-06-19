/*yanick for gis*/
var config = require('../../config/config');
var source = config.source;
var abtest = "20170322";
var gistf = "gis";
var gispu = "";
var gispf = "gis";
var gissu = window.location;
var gissf = document.referrer;
var gisof = "";
var gisop = "";
var gisops = 1;
var gisot = 1;
var gisd = new Date();
var giscolor = "";
if (navigator.appName == "Netscape") {
    giscolor = screen.pixelDepth
} else {
    giscolor = screen.colorDepth
}
try {
    gistf = top.document.referrer
} catch (e) {
}
try {
    gispu = window.parent.location
} catch (e) {
}
try {
    gispf = window.parent.document.referrer
} catch (e) {
}
try {
    gisops = document.cookie.match(new RegExp("(^| )gis_ok_pages=([^;]*)(;|$)"));
    gisops = (gisops == null) ? 1 : (parseInt(unescape((gisops)[2])) + 1);
    var gisoe = new Date();
    gisoe.setTime(gisoe.getTime() + 60 * 60 * 1000);
    document.cookie = "gis_ok_pages=" + gisops + ";path=/;expires=" + gisoe.toGMTString();
    gisot = document.cookie.match(new RegExp("(^| )gis_ok_times=([^;]*)(;|$)"));
    if (gisot == null) {
        gisot = 1
    } else {
        gisot = parseInt(unescape((gisot)[2]));
        gisot = (gisops == 1) ? (gisot + 1) : (gisot)
    }
    gisoe.setTime(gisoe.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "gis_ok_times=" + gisot + ";path=/;expires=" + gisoe.toGMTString()
} catch (e) {
}
try {
    if (document.cookie == "") {
        gisops = -1;
        gisot = -1
    }
} catch (e) {
}
gisof = gissf;
if (gispf !== "gis") {
    gisof = gispf
}
if (gistf !== "gis") {
    gisof = gistf
}
gisop = gispu;
try {
    lainframe
} catch (e) {
    gisop = gissu
}
gissrc = config.host + config.appName + '/webGo?source=' + source + '&abtest=' + abtest + '&tpages=' + gisops + '&ttimes=' + gisot + '&tzone=' + (0 - gisd.getTimezoneOffset() / 60) + '&tcolor=' + giscolor + '&sSize=' + screen.width + 'x' + screen.height + '&referrer=' + escape(gisof) + '&vpage=' + escape(gisop) + '&vvtime=' + gisd.getTime();
setTimeout('gisimg = new Image;gisimg.src=gissrc;', 0);
