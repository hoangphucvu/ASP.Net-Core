"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Shorten = (function () {
    function Shorten() {
    }
    Shorten.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var maxSize = 10;
        if (args && args.length > 0) {
            maxSize = parseInt(args[0], 10);
        }
        if (value && value.length > maxSize) {
            return value.substr(0, maxSize) + "...";
        }
        return value;
    };
    return Shorten;
}());
Shorten = __decorate([
    core_1.Pipe({
        name: "shorten"
    })
], Shorten);
exports.Shorten = Shorten;
//# sourceMappingURL=shorten.js.map