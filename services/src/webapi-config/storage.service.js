"use strict";
var core_1 = require('@angular/core');
var StorageService = (function () {
    function StorageService() {
        var _this = this;
        this.setItem = function (key, value) {
            _this._storage.setItem(key, JSON.stringify(value));
        };
        this.removeItem = function (key) {
            _this._storage.removeItem(key);
        };
        this.getItem = function (key) {
            var item = _this._storage.getItem(key);
            if (item && item !== 'undefined') {
                return JSON.parse(_this._storage.getItem(key));
            }
            return;
        };
        this._storage = localStorage;
    }
    StorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map