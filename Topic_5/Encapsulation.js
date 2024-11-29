"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A = /** @class */ (function () {
    function A(Name) {
        this.name = Name;
    }
    Object.defineProperty(A.prototype, "personDetails", {
        get: function () {
            return "Name: ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "personNewDetails", {
        set: function (newName) {
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return A;
}());
var obj = new A("Mehnajul");
console.log(obj.personDetails);
obj.personNewDetails = "Hassan";
console.log(obj.personDetails);
