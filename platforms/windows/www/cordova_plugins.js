cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.NotificationProxy",
        "file": "plugins/cordova-plugin-dialogs/src/windows/NotificationProxy.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-websql.WebSQL",
        "file": "plugins/cordova-plugin-websql/www/WebSQL.js",
        "pluginId": "cordova-plugin-websql",
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-websql.Database",
        "file": "plugins/cordova-plugin-websql/www/windows/Database.js",
        "pluginId": "cordova-plugin-websql"
    },
    {
        "id": "cordova-plugin-websql.SqlTransaction",
        "file": "plugins/cordova-plugin-websql/www/windows/SqlTransaction.js",
        "pluginId": "cordova-plugin-websql"
    },
    {
        "id": "cordova-plugin-websql.WebSqlProxy",
        "file": "plugins/cordova-plugin-websql/src/windows/WebSqlProxy.js",
        "pluginId": "cordova-plugin-websql",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-dialogs": "1.3.1",
    "cordova-plugin-websql": "0.0.10",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});