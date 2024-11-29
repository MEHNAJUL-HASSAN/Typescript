//getter is used to get a value. 
//setter is used to set a value.
var Person = /** @class */ (function () {
    function Person(Name) {
        this.name = Name;
    }
    Object.defineProperty(Person.prototype, "PersonName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (newname) {
            this.name = newname;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.display = function () {
        console.log("Name : ".concat(this.name));
    };
    return Person;
}());
var obj = new Person("Mehnajul");
obj.display();
obj.setName = "Hassan";
obj.display();
