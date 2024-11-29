//Q :- what is Enum ?
//  -> Enum is a group of constant that can assign a number to a string value and it facilitates easy Comparison.
//    example
var Person;
(function (Person) {
    Person[Person["firstName"] = 0] = "firstName";
    Person[Person["lastName"] = 1] = "lastName";
})(Person || (Person = {}));
console.log(Person.lastName);
