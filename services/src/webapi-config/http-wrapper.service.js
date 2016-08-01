"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var current_user_service_1 = require('./current-user.service');
var HttpWrapperService = (function () {
    function HttpWrapperService(_http, _currentUserService) {
        var _this = this;
        this._http = _http;
        this._currentUserService = _currentUserService;
        this.get = function (url, options) {
            options = _this.prepareOptions(options);
            return _this._http.get(url, options);
        };
        this.post = function (url, body, options) {
            options = _this.prepareOptions(options);
            return _this._http.post(url, body, options);
        };
        this.put = function (url, body, options) {
            options = _this.prepareOptions(options);
            return _this._http.put(url, body, options);
        };
        this.delete = function (url, options) {
            options = _this.prepareOptions(options);
            return _this._http.delete(url, options);
        };
        this.patch = function (url, body, options) {
            options = _this.prepareOptions(options);
            return _this._http.patch(url, body, options);
        };
    }
    HttpWrapperService.prototype.prepareOptions = function (options) {
        var token = this._currentUserService.token;
        options = options || {};
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        if (token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Accept', 'application/json');
        return options;
    };
    HttpWrapperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, current_user_service_1.CurrentUserService])
    ], HttpWrapperService);
    return HttpWrapperService;
}());
exports.HttpWrapperService = HttpWrapperService;
//# sourceMappingURL=http-wrapper.service.js.map