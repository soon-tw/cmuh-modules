"use strict";
var core_1 = require('@angular/core');
var storage_service_1 = require('./storage.service');
var CurrentUserService = (function () {
    function CurrentUserService(_storageService) {
        this._storageService = _storageService;
    }
    Object.defineProperty(CurrentUserService.prototype, "token", {
        get: function () {

            var token = '52BA2EF5AF8DAB794DCB706622AC4CDB45BC533D70883F71CEECD665C1C29B444469AC9E362A692110EA0D1B617DD816D4285F62742736F5DC60FE13F2E6A9075AA9DA799460D34A061B8AD7253B669AD6646E88';
          //  var token = this._storageService.getItem('auth');
            return token;
        },
        set: function (token) {
            this._storageService.setItem('auth', token);
        },
        enumerable: true,
        configurable: true
    });
    CurrentUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], CurrentUserService);
    return CurrentUserService;
}());
exports.CurrentUserService = CurrentUserService;
//# sourceMappingURL=current-user.service.js.map