// interface polymorphism
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
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    ;
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(5, 10)];
shapes.forEach(function (sh) {
    console.log(sh.area());
});
// inheritance polymorphism
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("some generics sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("woof woof");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("meow meow");
    };
    return Cat;
}(Animal));
var animals = [new Dog(), new Cat()];
animals.forEach(function (anim) {
    anim.makeSound();
});
// function overloading
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (names) {
        if (Array.isArray(names)) {
            return "hello ".concat(names.join(","));
        }
        else {
            return "hello ".concat(names);
        }
    };
    return Person;
}());
var p = new Person("Mehnajul");
var p1 = new Person(['Mehnajul', 'hassan']);
console.log(p.greet("Mehnajul"));
console.log(p1.greet(['Mehnajul', 'hassan']));
// function override
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.makeSound = function (sound) {
        console.log("ooohhhhaaaaa hhhhahhhhaa");
        return sound;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.makeSound = function (sound) {
        console.log("ldjhfhdkjfhkdhkfhkedhk");
        return sound;
    };
    return B;
}(A));
var obj = new A();
obj.makeSound('hskhdh');
