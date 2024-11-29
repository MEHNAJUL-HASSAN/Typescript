//Q :- what is Enum ?
//  -> Enum is a group of constant that can assign a number to a string value and it facilitates easy Comparison.
//    example

    enum Person {
        firstName="Mehnajul",
        lastName = "hassan"
    }
   // Person.firstName= "Merajul" // not allowed as enum is a group of constant and constant means values will not change. 
    console.log(Person.lastName);

