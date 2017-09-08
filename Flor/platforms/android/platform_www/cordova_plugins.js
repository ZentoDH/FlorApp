cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-sms-plugin.Sms",
        "file": "plugins/cordova-sms-plugin/www/sms.js",
        "pluginId": "cordova-sms-plugin",
        "clobbers": [
            "window.sms"
            ],
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-sms-plugin": "0.1.11",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-statusbar": "2.2.3"
};
// BOTTOM OF METADATA
});