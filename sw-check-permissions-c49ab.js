function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "yohle.com",
    "resubscribeOnInstall": true,
    "zoneId": 9857170,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://yohle.com/act/files/sw.perm.check.min.js?r=sw');
