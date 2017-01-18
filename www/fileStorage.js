window.cordova.define("com.dfranzen.cordova.FileStorage.FileStorage", function (require, exports, module) {
    'use strict';

    module.exports = {
        open: function (success, failure) {
            window.cordova.exec(success, failure, "FileChooser", "open", []);
        },
        openPath: function (success, failure) {
            window.cordova.exec(success, failure, "FileChooser", "open_path", []);
        },
        readFromUri: function (success, failure, uri) {
            window.cordova.exec(success, failure, "FileChooser", "read_from_uri", [uri]);
        },
        writeToUri: function (success, failure, uri, data) {
            window.cordova.exec(success, failure, "FileChooser", "write_to_uri", [uri, data]);
        },
        appendToUri: function (success, failure, uri, data) {
            window.cordova.exec(success, failure, "FileChooser", "append_to_uri", [uri, data]);
        }
    };
});
