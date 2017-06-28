/*global cordova, module*/

module.exports = {
    checkStatus: function(port, callback) {
        cordova.exec(function(result) {
                callback(null, result)
            },
            function(error) {
                callback(error)
            }, 'StarPrinter', 'checkStatus', [port]);
    },
    portDiscovery: function(type, callback) {
        type = type || 'All';
        cordova.exec(function(result) {
                callback(null, result)
            },
            function(error) {
                callback(error)
            }, 'StarPrinter', 'portDiscovery', [type]);
    },
    printReceipt: function(args, callback) {
        args = angular.fromJson(args);
        printContent = args.printContent;
        portName = args.portName;
        cordova.exec(function(result) {
                callback(null, result)
            },
            function(error) {
                callback(error)
            }, 'StarPrinter', 'printReceipt', [portName, [printContent]]);
    },
    openCashDrawer: function(port, callback) {
        cordova.exec(function(result) {
                callback(null, result)
            },
            function(error) {
                callback(error)
            }, 'StarPrinter', 'openCashDrawer', [port]);
    },
}