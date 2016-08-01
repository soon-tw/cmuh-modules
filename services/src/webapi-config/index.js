"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var current_user_service_1 = require('./current-user.service');
var http_wrapper_service_1 = require('./http-wrapper.service');
var storage_service_1 = require('./storage.service');
__export(require('./current-user.service'));
__export(require('./http-wrapper.service'));
__export(require('./storage.service'));
exports.WebapiConfig = [
    current_user_service_1.CurrentUserService,
    http_wrapper_service_1.HttpWrapperService,
    storage_service_1.StorageService
];
//# sourceMappingURL=index.js.map