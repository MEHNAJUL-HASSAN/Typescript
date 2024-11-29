"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstName = firstname,
            this.lastName = lastname;
    }
    return Person;
}());
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1(firstname, lastname) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.firstName = firstname,
            _this.lastName = lastname;
        return _this;
    }
    Person1.prototype.display = function () {
        console.log("Full Name : ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person1;
}(Person));
var personObj = new Person1("Mehnajul", "Hassan");
personObj.display();
