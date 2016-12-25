cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-actionsheet.ActionSheet",
        "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
        "pluginId": "cordova-plugin-actionsheet",
        "clobbers": [
            "window.plugins.actionsheet"
        ]
    },
    {
        "id": "com.verso.cordova.clipboard.Clipboard",
        "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
        "pluginId": "com.verso.cordova.clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    },
    {
        "id": "cordova-plugin-image-picker.ImagePicker",
        "file": "plugins/cordova-plugin-image-picker/www/imagepicker.js",
        "pluginId": "cordova-plugin-image-picker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "com.subitolabs.android.cordova.galleryapi.galleryAPI",
        "file": "plugins/com.subitolabs.android.cordova.galleryapi/www/gallery-api.js",
        "pluginId": "com.subitolabs.android.cordova.galleryapi",
        "clobbers": [
            "galleryAPI"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-x-socialsharing": "5.1.3",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-actionsheet": "2.3.1",
    "com.verso.cordova.clipboard": "0.1.0",
    "cordova-plugin-image-picker": "1.1.1",
    "com.subitolabs.android.cordova.galleryapi": "0.2",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-camera": "2.3.1",
    "cordova-plugin-splashscreen": "3.1.1-dev",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-admobpro": "2.25.0"
};
// BOTTOM OF METADATA
});