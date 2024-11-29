// single inheritance
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
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name) {
        return _super.call(this, name) || this;
    }
    B.prototype.display = function () {
        console.log("Name : ".concat(this.name));
    };
    return B;
}(A));
var obj = new B("Mehnajul");
obj.display();
// multilevel inheritance 
var C = /** @class */ (function () {
    function C(fName) {
        this.fName = fName;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D(fname, lname) {
        var _this = _super.call(this, fname) || this;
        _this.lname = lname;
        return _this;
    }
    return D;
}(C));
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E(fname, lname) {
        return _super.call(this, fname, lname) || this;
    }
    E.prototype.displayDetails = function () {
        console.log("First Name : ".concat(this.fName, "\n Last Name : ").concat(this.lname));
    };
    return E;
}(D));
var obj1 = new E("Mehnajul", "hassan");
obj1.displayDetails();
//hierarchical inheritance 
var F = /** @class */ (function () {
    function F(firstName) {
        this.firstName = firstName;
    }
    return F;
}());
var G = /** @class */ (function (_super) {
    __extends(G, _super);
    function G(firstName) {
        return _super.call(this, firstName) || this;
    }
    G.prototype.display1 = function () {
        console.log("Name : ".concat(this.firstName));
    };
    return G;
}(F));
var H = /** @class */ (function (_super) {
    __extends(H, _super);
    function H(firstName) {
        return _super.call(this, firstName) || this;
    }
    H.prototype.display2 = function () {
        console.log("Name : ".concat(this.firstName));
    };
    return H;
}(F));
var obj2 = new G("Mehnajul");
var obj3 = new H("Merajul");
obj2.display1();
obj3.display2();
