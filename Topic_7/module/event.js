"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.displayName = function () {
        console.log("Name : ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
